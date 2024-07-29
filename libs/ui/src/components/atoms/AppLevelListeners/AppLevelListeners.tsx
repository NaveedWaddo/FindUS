import {
  useInitialiseUser,
  useUserListener,
} from '@findus-org/hooks/src/user'
import { useNotification } from '@findus-org/hooks/src/notifications'
import { Role } from '@findus-org/types'

export interface IAppLevelListenersProps {
  role?: Role
}

export const AppLevelListeners = ({ role }: IAppLevelListenersProps) => {
  useUserListener()
  useInitialiseUser({ role })
  useNotification()

  return null
}
