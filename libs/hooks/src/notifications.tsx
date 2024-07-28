import { addNotification, removeNotification } from '@findus-org/store/utils'

import { notification$ } from '@findus-org/util/subjects'
import { makeId } from '@findus-org/util'
import { useEffect } from 'react'
import {
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  delay,
  catchError,
  EMPTY,
} from 'rxjs'
import { useAppDispatch } from '@findus-org/store'
import {} from '@findus-org/store/utils'

export const useNotification = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const subscription = notification$
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((v) => ({ ...v, id: makeId(12) })),
        tap((v) => {
          dispatch(addNotification(v))
        }),
        delay(4000),
        tap((v) => {
          dispatch(removeNotification(v.id))
        }),
        catchError((e) => {
          return EMPTY
        }),
      )
      .subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [addNotification, removeNotification])
}
