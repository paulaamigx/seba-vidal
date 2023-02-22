import { SButton, SImage, SWrapper } from '@/styles/atoms/SlideMain'
import { ImageKeyboardBody} from '@/assets'

const SlideMain = () => {
  return(
    <SWrapper>
      <div>
        Texto sebakan vidal ma lindo
        <SButton>Hace algo!</SButton>
      </div>
      <SImage alt='' src={ImageKeyboardBody}/>
    </SWrapper>
  )
}

export default SlideMain
