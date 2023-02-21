import { ImageKeyboard, ImageKeyboardBody} from '@/assets'
import { SImage, SSlide, SWrapper } from '@/styles/molecules/Gallery'
import { useRef } from 'react'
import { useSnapScroll } from '@/hooks'

const Gallery = () => {
  const ref = useRef<HTMLDivElement|null>(null)
  useSnapScroll(ref)

  return(
    <SWrapper ref={ref}>
      <SSlide>
        <SImage alt='' src={ImageKeyboardBody}/>
      </SSlide>
      <SSlide>
        <SImage alt='' src={ImageKeyboard}/>
      </SSlide>
    </SWrapper>
  )
}

export default Gallery
