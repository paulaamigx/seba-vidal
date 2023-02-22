import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const SWrapper = styled.div`
  position: relative;
  min-width: var(--minWidth);
  >*{
    overfloY: hidden;
      overfloY: hidden;
  }
`

export const SSlidesContainer= styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  min-width: var(--minWidth);
  >*{
    scroll-snap-align: center;
  }
`

export const SFontAwesomeIcon = styled(FontAwesomeIcon)<{dir: 'right'|'left'}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: var(--main);
  opacity: .5;
  cursor: pointer;
  ${prop =>  `${prop.dir}: .8rem`};
`

