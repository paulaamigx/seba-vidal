import { SButton, SImage, SWrapper } from '@/styles/atoms/SlideMain'
import { ImageKeyboardBody} from '@/assets'

const SlideMain = () => {
  return(
    <SWrapper>
      <div>
        Lorem ipsum dolor sit amet
        <SButton>Hace algo!</SButton>
      </div>
      <SImage alt='' src={ImageKeyboardBody}/>
    </SWrapper>
  )
}

export default SlideMain
