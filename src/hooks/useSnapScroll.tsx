import { MutableRefObject, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const useSnapScroll = (ref:  MutableRefObject<HTMLDivElement|null>) => {

  const debouncedListener = useDebouncedCallback( e => {
    const gallery = e.target as HTMLDivElement
    const pos = gallery?.scrollLeft
    const width = gallery?.children[0].clientWidth
    const mod = pos%width
    if(mod !== 0){
      const sumand = mod > width/2? width : 0
      gallery?.scrollTo({
        left: pos + sumand - mod,
        behavior: 'smooth'
      })
    }
  }, 250)

  useEffect(() => {
    if(!ref.current) return
    ref.current.onscroll =  debouncedListener
  }, [])
  return {}
}
export default useSnapScroll
