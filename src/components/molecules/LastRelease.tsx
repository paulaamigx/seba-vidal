import { SWrapper, SYouTube } from '@/styles/molecules/LastRelease'
import { Title } from '@/components'

const LastRelease = () => {
  return(
    <SWrapper id='ultimo-lanzamiento'>
      <Title text='Último Lanzamiento'/>
      <SYouTube
        videoId="ZEWKEwUqxDs"/>
    </SWrapper>
  )
}

export default LastRelease
