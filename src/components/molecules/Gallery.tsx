import { SFontAwesomeIcon, SSlide, SSlidesContainer,
  SWrapper } from '@/styles/molecules/Gallery'
import { Slide2,  SlideMain } from '@/components'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { useSnapScroll } from '@/hooks'

const Gallery = () => {
  const ref = useRef<HTMLDivElement|null>(null)
  useSnapScroll(ref)

  const handleScroll = (dir: 'prev' | 'next') => {
    if(!ref.current) return
    const pos = ref.current.scrollLeft
    const width = ref.current.clientWidth

    ref.current?.scrollTo({
      left: dir === 'prev'? pos - width : pos + width ,
      behavior: 'smooth'
    })
  }
  return(
    <SWrapper >
      <SSlidesContainer ref={ref}>
        <SSlide> <SlideMain/> </SSlide>
        <SSlide> <Slide2/> </SSlide>
      </SSlidesContainer>

      <SFontAwesomeIcon
        onClick={()=>handleScroll('next')}
        icon={faCaretRight}
        dir='right'/>
      <SFontAwesomeIcon
        onClick={()=>handleScroll('prev')}
        icon={faCaretLeft}
        dir='left'/>
    </SWrapper>
  )
}

export default Gallery
