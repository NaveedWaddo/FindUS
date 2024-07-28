import { auth } from '@findus-org/network/src/config/firebase'

import { useAppDispatch, useAppSelector } from '@findus-org/store'
import { selectUid, resetUser, setUser } from '@findus-org/store/user'

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

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
