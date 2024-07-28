import { Subject } from 'rxjs'
import { NotificationType } from '@findus-org/types'

export const notification$ = new Subject<Omit<NotificationType, 'id'>>()
