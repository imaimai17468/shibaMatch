import React, { useMemo } from 'react'

import { useRecoilState } from 'recoil'
import { favoriteState } from '@/src/store/favorite'
import Image from 'next/image'
import { Favorite } from '../Favorite'
import { PictureProps } from './Picture.types'

const Picture: React.FC<PictureProps> = ({
  src,
  index = 0,
  className = '',
  width,
  height,
}) => {
  const [favorite, setFavorite] = useRecoilState(favoriteState)
  const isFavorite = useMemo(() => favorite.includes(src), [favorite, src])

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
      <Image
        key={index}
        src={src}
        alt={'shiba' + index}
        width={width || 150}
        height={height || 150}
        className={className + ' rounded-full shadow-lg'}
      />
      <Favorite
        className="absolute top-0 right-0"
        onClick={favoriteHandler}
        src={src}
        iniFavorite={isFavorite}
      />
    </div>
  )
}
export default Picture
