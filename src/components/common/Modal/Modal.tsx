import React from 'react'

import Image from 'next/image'
import close from '../../../assets/icons/close.svg'
import { ModalProps } from './Modal.types'

const Modal: React.FC<ModalProps> = ({ onClose, src }) => {
  // modal
  return (
    <div className="fixed top-0 left-0 z-50 h-full w-full bg-black/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={onClose}
          className="mb-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-3 transition hover:scale-90"
        >
          <Image src={close} alt="close" width={24} height={24} />
        </div>
        <Image
          src={src}
          alt="modal"
          className="rounded-lg shadow-lg transition"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
export default Modal
