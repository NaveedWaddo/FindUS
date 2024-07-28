import { useUserListener } from '@findus-org/hooks/src/user'
import { useNotification } from '@findus-org/hooks/src/notifications'

export interface IAppLevelListenersProps {}

export const AppLevelListeners = () => {
  useUserListener()
  useNotification()

  return null
}
