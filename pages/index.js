import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ATiGram</title>
        <meta name="description" content="آتی گرام یک شبکه به اشتراک گذاری عکس و متن میباشد." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-2xl text-gray-900 flex mt-3 justify-center'>ATiGram Massenger</h1>
      </main>
    </>
  )
}
