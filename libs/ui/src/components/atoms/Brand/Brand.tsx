import { IconUser } from '@tabler/icons-react'
import Image from 'next/image'
import { GradientText } from '../../molecules/GradientText'
import { useAppSelector } from '@findus-org/store'
import { selectVictimName, selectVictimPic } from '@findus-org/store/utils'
import { Role } from '@findus-org/types'

export interface IBrandProps {
  type?: Role
}

export const Brand = ({ type }: IBrandProps) => {
  const victimName = useAppSelector(selectVictimName)
  const victimPic = useAppSelector(selectVictimPic)
  return (
    <div className={`flex items-center gap-2 `}>
      {victimPic ? (
        <Image
          alt=""
          src={victimPic}
          width={100}
          height={100}
          className="object-cover w-8 h-8 border border-black shadow-lg"
        />
      ) : (
        <div className="h-full p-1 border border-black shadow-lg">
          <IconUser className="stroke-2" />
        </div>
      )}

      <div>
        <div className="flex gap-1">
          <div className="text-xl font-black">
            FindUS {victimName ? ' ' + victimName : ' '}
          </div>
          <span className="text-xs">{type}</span>
        </div>
        <GradientText className="text-xs">
          Project by <span className="italic">Naveed Waddo</span>
        </GradientText>
      </div>
    </div>
  )
}
