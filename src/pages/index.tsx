import { Bio, Dates, Footer, Gallery, LastRelease, Menu,
  SocialMediaBubble } from '@/components'
import { Roboto } from '@next/font/google'
import {useEffect} from 'react'

const roboto = Roboto({
  weight: ['400', '500','700', '900'],
  subsets: ['latin'],
})

export default function Home() {

  useEffect(() => {
    document.body.scrollTo(0,0)
  },[])

  return (
    <main className={roboto.className}>
      <Menu/>
      <SocialMediaBubble/>
      <Gallery/>
      <Dates/>
      <LastRelease/>
      <Bio/>
      <Footer/>
    </main>
  )
}
