import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight:['500', '700','900'],subsets:['cyrillic'] })

export default function Home() {
  return (
    <main
      className={` ${roboto.className}`}
    >
    </main>
  )
}
