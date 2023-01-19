import { useState } from 'react'
import Head from 'next/head'
import { Button, Picture } from '../components/common'
import { Header } from '../components/screen/Header'

export default function Home() {
  const [picUrl, setPicUrl] = useState<string[]>([])

  const callShibaHandler = () => {
    fetch('https://shibe.online/api/shibes?count=12&urls=true&httpsUrls=true')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((url: string) => {
          setPicUrl((prev) => [...prev, url])
        })
      })
  }

  return (
    <>
      <Head>
        <title>しばまっち</title>
        <meta name="description" content="ShibaInu is so cute!!!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center gap-10 bg-gray-100 bg-gradient-to-r from-yellow-400 to-yellow-600 p-4">
        <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-md bg-white p-4 shadow-md">
          <h1 className="my-5 text-center text-xl md:text-3xl">
            かわいいしばいぬたち
          </h1>
          {picUrl.length === 0 && (
            <Button outlined size="middle" onClick={callShibaHandler}>
              🐶 しばいぬをよぶ 🐶
            </Button>
          )}
          {picUrl && (
            <div className="grid grid-cols-2 place-items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
              {picUrl.map((url, index) => (
                <Picture key={index} src={url} />
              ))}
            </div>
          )}
          {picUrl.length > 0 && (
            <Button
              outlined
              size="middle"
              onClick={callShibaHandler}
              className="my-10"
            >
              🐶 もっとしばいぬをよぶ 🐶
            </Button>
          )}
        </div>
      </main>
    </>
  )
}
