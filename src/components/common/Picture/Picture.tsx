import React from 'react'

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
  return (
    <div className="relative">
      <Image
        key={index}
        src={src}
        alt={'shiba' + index}
        width={width || 200}
        height={height || 200}
        className={className + ' rounded-full shadow-lg'}
      />
      <Favorite className="absolute top-0 right-0" />
    </div>
  )
}
export default Picture
