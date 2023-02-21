import { Gallery, Menu, SocialMediaBubble } from '@/components'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '500','700', '900'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <Menu/>
      <Gallery/>
      <SocialMediaBubble/>
    </main>
  )
}
