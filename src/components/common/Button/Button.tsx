import React from 'react'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({
  outlined = false,
  size = 'middle',
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`
        rounded
        ${
          size === 'middle'
            ? 'px-5 py-1'
            : 'size === large'
            ? 'px-8 py-2 text-lg'
            : 'text-md px-3 py-1'
        }
        ${
          outlined
            ? 'border border-blue-600 text-blue-600 transition duration-200 hover:bg-blue-600 hover:text-white'
            : 'border-none bg-blue-600 text-white transition duration-200 hover:bg-blue-500'
        }
        hover:shadow-lg
        active:shadow-none active:scale-95
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
