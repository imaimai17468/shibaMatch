import React, { useState } from 'react'

import heart from '../../../assets/icons/heart.svg'
import white_heart from '../../../assets/icons/white_heart.svg'
import Image from 'next/image'
import { FavoriteProps } from './Favorite.types'

const Favorite: React.FC<FavoriteProps> = ({
  className = '',
  onClick,
  src,
  iniFavorite = false,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(iniFavorite)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    onClick && onClick(src || '')
  }

  return (
    <>
      {!isFavorite && (
        <div
          className={
            className +
            ' flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:cursor-pointer hover:bg-pink-500 active:bg-white'
          }
          onClick={toggleFavorite}
        >
          <Image src={heart} alt="heart" width={20} height={20} />
        </div>
      )}
      {isFavorite && (
        <div
          className={
            className +
            ' flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 shadow-md transition hover:cursor-pointer hover:bg-blue-500 active:bg-white'
          }
          onClick={toggleFavorite}
        >
          <Image src={white_heart} alt="red heart" width={20} height={20} />
        </div>
      )}
    </>
  )
}
export default Favorite
