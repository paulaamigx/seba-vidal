import { MutableRefObject, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const useGalleryScroll = (ref:  MutableRefObject<HTMLDivElement|null>) => {

  const correctPosition = useDebouncedCallback(() => {
    if(!ref.current) return
    const pos = ref.current?.scrollLeft
    const width = ref.current?.clientWidth
    const mod = pos%width
    if(mod !== 0){
      const sumand = mod > width/2? width : 0
      ref.current?.scrollTo({
        left: pos + sumand - mod,
        behavior: 'smooth'
      })
    }
  }, 250)

  const handleCircularScroll = useDebouncedCallback(() => {
    if(!ref.current) return
    const pos = ref.current.scrollLeft
    const width = ref.current.clientWidth
    const totalWidth = width*ref.current.childElementCount
    const mod = pos%width
    if(mod === 0){
      if(pos === 0)
        ref.current?.scrollTo(totalWidth - 2*width, 0)
      else if(pos === totalWidth - width)
        ref.current?.scrollTo(width,0)
    }
  }, 20)


  useEffect(() => {
    if(!ref.current) return
    ref.current.onscroll = () => {
      correctPosition()
      handleCircularScroll()
    }
  }, [])
  return {}
}

export default useGalleryScroll
