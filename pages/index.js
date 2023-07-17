import Head from 'next/head'
import Header from '../public/components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 clonel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
     
    </div>
  );
}
