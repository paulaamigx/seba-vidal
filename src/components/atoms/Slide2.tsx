import { SImage, SWrapper } from '@/styles/atoms/Slide2'
import { ImageKeyboard } from '@/assets'

const Slide2 = () => {
  return(
    <SWrapper>
      <div>Lorem ipsum</div>
      <div>Lorem ipsum</div>
      <SImage alt='' src={ImageKeyboard}/>
    </SWrapper>
  )
}

export default Slide2
