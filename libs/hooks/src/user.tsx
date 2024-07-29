import { auth } from '@findus-org/network/src/config/firebase'
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from '@findus-org/store'
import { selectUid, resetUser, setUser } from '@findus-org/store/user'

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useCreateOfficerMutation , useCreateWitnessMutation } from "@findus-org/network/src/generated";
import { Role } from 'libs/types';

export const useUserListener = () => {
  //   useRefreshToken()

  const dispatch = useAppDispatch()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          dispatch(resetUser())
          return
        }

        const tokenResult = await auth.currentUser?.getIdTokenResult()
        const roles = tokenResult?.claims.roles || []
        const { displayName, email, uid } = user

        dispatch(
          setUser({
            uid,
            email: email || '',
            displayName: displayName || '',
            roles,
            token: tokenResult?.token,
          }),
        )
      }),
    [],
  )
}

export const useCreateUser = () => {
  const [createWitness, { loading: witnessLoading }] =
    useCreateWitnessMutation()
  const [createOfficer, { loading: officerLoading }] =
    useCreateOfficerMutation()

  const createUser = async ({
    uid,
    displayName,
    role,
  }: {
    uid?: string
    displayName?: string | null
    role?: Role
  }) => {
    console.log('uid, displayName, role ', uid, displayName, role)
    try {
      if (role === 'witness' && uid) {
        await createWitness({
          variables: {
            createWitnessInput: {
              name: displayName,
              uid,
            },
          },
        })
      }
      if (role === 'officer' && uid) {
        await createOfficer({
          variables: {
            createOfficerInput: {
              name: displayName,
              uid,
            },
          },
        })
      }
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return {
    createUser,
    loading: witnessLoading || officerLoading,
  }
}
