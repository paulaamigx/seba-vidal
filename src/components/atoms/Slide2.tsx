import { SImage, SWrapper } from '@/styles/atoms/Slide2'
import { ImageKeyboard } from '@/assets'

const Slide2 = () => {
  return(
    <SWrapper>
      <div>Te amo</div>
      <div>Te amo</div>
      <SImage alt='' src={ImageKeyboard}/>
    </SWrapper>
  )
}

export default Slide2
