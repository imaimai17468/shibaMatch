import React from 'react'

import { useRecoilState } from 'recoil'
import { favoriteState } from '@/src/store/favorite'
import Link from 'next/link'

const Header = () => {
  const [favorite, setFavorite] = useRecoilState(favoriteState)

  return (
    <>
      <header className="flex h-16 flex-row items-center gap-5  bg-gray-700 p-4 text-white shadow-md">
        <Link href="/">
          <h1 className="text-xl md:text-3xl">しばまっち</h1>
        </Link>
        <Link href="/favorites">
          <div className="flex flex-row gap-3 rounded-md border p-2 transition hover:bg-pink-500">
            <p>お気にいり</p>
            <div className="flex w-6 justify-center rounded-full bg-white text-black">
              {favorite.length}
            </div>
          </div>
        </Link>
      </header>
    </>
  )
}
export default Header
