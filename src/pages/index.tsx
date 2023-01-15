import { useState } from 'react'
import Head from 'next/head'
import { Button } from '../components/common'
import { useQRCode } from 'next-qrcode'
import { QrReader } from 'react-qr-reader'

export default function Home() {
  const { Image } = useQRCode()
  const [picUrl, setPicUrl] = useState<string>('')
  const [data, setData] = useState('No result')

  const callShibaHandler = () => {
    fetch('https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
      .then((res) => res.json())
      .then((data) => {
        setPicUrl(data[0])
      })
  }

  return (
    <>
      <Head>
        <title>ShibaMatch</title>
        <meta name="description" content="ShibaInu is so cute!!!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="h-16 bg-gray-700 p-4 text-white shadow-md">
        <h1 className="text-3xl">ShibaMatch</h1>
      </header>
      <main className="flex h-screen flex-col items-center gap-10 bg-gray-100 bg-gradient-to-r from-yellow-400 to-yellow-600 p-4">
        <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-md bg-white p-4 shadow-md">
          <h1 className="text-3xl">君のしば犬</h1>
          <Button outlined size="middle" onClick={callShibaHandler}>
            しば犬をよぶ
          </Button>
          {picUrl && (
            <div className="my-4 flex flex-row flex-wrap items-center justify-center gap-4">
              <img
                src={picUrl}
                alt="shiba"
                className="w-1/2 rounded-full shadow-lg md:w-1/4"
              />
              <Image text={picUrl} />
            </div>
          )}
        </div>
      </main>
    </>
  )
}
