import { ImageKeyboard, ImageKeyboardBody} from '@/assets'
import { SButton, SImage, SSlide, SWrapper } from '@/styles/molecules/Gallery'
import { useRef } from 'react'
import { useSnapScroll } from '@/hooks'

const Gallery = () => {
  const ref = useRef<HTMLDivElement|null>(null)
  useSnapScroll(ref)

  return(
    <SWrapper ref={ref}>
      <SSlide>
        <div>
          Texto sebakan vidal ma lindo
          <SButton>Hace algo!</SButton>
        </div>
        <SImage alt='' src={ImageKeyboardBody}/>
      </SSlide>
      <SSlide>
        <div>Te amo</div>
        <div>Te amo</div>
        <SImage alt='' src={ImageKeyboard}/>
      </SSlide>
    </SWrapper>
  )
}

export default Gallery
