import { SImage, SText, SWrapper } from '@/styles/molecules/Bio'
import { ImageGuitar } from '@/assets'
import { Title } from '@/components'
import { bio } from '@/data/bio'


const Bio = () => {
  return(
    <SWrapper id='bio'>
      <Title text='Bio'/>
      <SImage alt='' src={ImageGuitar}/>
      <SText>{bio}</SText>
    </SWrapper>
  )
}

export default Bio
