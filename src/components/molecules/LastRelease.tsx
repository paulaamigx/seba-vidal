import { SWrapper, SYouTube } from '@/styles/molecules/LastRelease'
import { Title } from '@/components'

const LastRelease = () => {
  return(
    <SWrapper id='ultimo-lanzamiento'>
      <Title text='Último Lanzamiento'/>
      <SYouTube
        videoId="2STgsrSIC0w"/>
    </SWrapper>
  )
}

export default LastRelease
