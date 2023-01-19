import React, { useMemo, useState } from 'react'

import { useRecoilState } from 'recoil'
import { favoriteState } from '@/src/store/favorite'
import Image from 'next/image'
import { Favorite } from '../Favorite'
import { PictureProps } from './Picture.types'
import { Modal } from '../Modal'
import expansion from '../../../assets/icons/expansion.svg'

const Picture: React.FC<PictureProps> = ({
  src,
  index = 0,
  className = '',
  width,
  height,
}) => {
  const [favorite, setFavorite] = useRecoilState(favoriteState)
  const isFavorite = useMemo(() => favorite.includes(src), [favorite, src])
  const [isModal, setIsModal] = useState<boolean>(false)

  const favoriteHandler = (src: string) => {
    const isFavorite = favorite.includes(src)
    if (isFavorite) {
      setFavorite(favorite.filter((item) => item !== src))
    } else {
      setFavorite([...favorite, src])
    }
  }

  return (
    <div className="relative">
      {isModal && <Modal src={src} onClose={() => setIsModal(false)} />}
      <Image
        key={index}
        src={src}
        alt={'shiba' + index}
        width={width || 200}
        height={height || 200}
        className={className + ' rounded-full shadow-lg transition'}
      />
      <Favorite
        className="absolute top-0 right-0"
        onClick={favoriteHandler}
        src={src}
        iniFavorite={isFavorite}
      />
      <div
        className="absolute top-0 left-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:scale-125 md:h-8 md:w-8"
        onClick={() => setIsModal(true)}
      >
        <Image src={expansion} alt="expansion" width={20} height={20} />
      </div>
    </div>
  )
}
export default Picture
