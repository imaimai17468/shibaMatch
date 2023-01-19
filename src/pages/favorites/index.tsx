import { useRecoilState } from 'recoil'
import { favoriteState } from '@/src/store/favorite'
import { Header } from '@/src/components/screen/Header'
import { Picture } from '@/src/components/common/Picture'

export default function Home() {
  const [favorite, setFavorite] = useRecoilState(favoriteState)

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center gap-10 bg-gray-100 bg-gradient-to-r from-yellow-400 to-yellow-600 p-4">
        <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-md bg-white p-4 shadow-md">
          <div className="mb-5 flex flex-col gap-3">
            <p className="text-center text-3xl">おきにいり</p>
            <p className="text-center text-3xl">{favorite.length}匹</p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {favorite.map((url, index) => (
              <Picture key={index} src={url} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
