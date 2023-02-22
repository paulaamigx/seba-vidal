import { SLogo, SWrapper } from '@/styles/molecules/Menu'
import {useEffect, useRef} from 'react'
import { MenuItem } from '@/components'

const Menu= () => {
  const ref = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    document.body.onscroll = e => {
      const target = e.target as HTMLDocument
      const left = target.scrollingElement?.scrollLeft
      if(left && ref.current)
        ref.current.style.left = -left+'px'
    }
  },[])

  return(
    <SWrapper ref={ref}>
      <SLogo>SebaVidal</SLogo>
      <MenuItem text='Home'/>
      <MenuItem text='Home'/>
      <MenuItem text='Home'/>
      <MenuItem text='Home'/>
    </SWrapper>
  )
}

export default Menu
