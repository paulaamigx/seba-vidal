import { SEdge, SWrapper } from '@/styles/atoms/Slide'
import {ReactNode} from 'react'

const Slide = ({children}:{children: ReactNode}) =>
  <SWrapper>
    {children}
    <SEdge/>
  </SWrapper>

export default Slide
