import { SLogo, SWrapper } from '@/styles/molecules/Menu'
import {useEffect, useRef, useState} from 'react'
import { MenuItem } from '@/components'

const Menu= () => {
  const ref = useRef<HTMLDivElement|null>(null)
  const [light, setLight] = useState(false)

  useEffect(() => {
    document.body.onscroll = e => {
      const target = e.target as HTMLDocument
      const left = target.scrollingElement?.scrollLeft
      const top = target.scrollingElement?.scrollTop
      if(left && ref.current)
        ref.current.style.left = -left+'px'
      const datesTop = document.getElementById('home')?.clientHeight
      console.log(top, datesTop)
      setLight(!!top && !!datesTop && top >= datesTop)
    }
  },[])

  return(
    <SWrapper ref={ref} light={light}>
      <SLogo>SebaVidal</SLogo>
      <MenuItem text='Home'/>
      <MenuItem text='Fechas'/>
      <MenuItem text='Último Lanzamiento'/>
      <MenuItem text='Bio'/>
    </SWrapper>
  )
}

export default Menu
