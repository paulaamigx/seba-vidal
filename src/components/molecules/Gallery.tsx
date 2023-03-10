import { SFontAwesomeIcon, SSlidesContainer,
  SWrapper } from '@/styles/molecules/Gallery'
import { Slide, Slide2,  SlideMain } from '@/components'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import { useGalleryScroll } from '@/hooks'

const Slides = [<SlideMain/>, <Slide2/>]
const Gallery = () => {
  const ref = useRef<HTMLDivElement|null>(null)
  useGalleryScroll(ref)

  const handleScroll = (dir: 'prev' | 'next') => {
    if(!ref.current) return
    const pos = ref.current.scrollLeft
    const width = ref.current.clientWidth
    ref.current?.scrollTo({
      left: dir === 'prev'? pos - width : pos + width ,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    if(!ref.current) return
    ref.current.scrollTo(ref.current.clientWidth,0)
  },[])

  return(
    <SWrapper id='home'>
      <SSlidesContainer ref={ref}>
        <Slide> {Slides[Slides.length-1]} </Slide>
        {Slides.map((slide,index) =>
          <Slide key={`slide${index}`}> {slide} </Slide>
        )}
        <Slide> {Slides[0]} </Slide>
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
