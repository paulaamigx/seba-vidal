import Image from 'next/image'
import styled from 'styled-components'

export const SWrapper = styled.div`
  width: 100vw;
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  >*{
    scroll-snap-align: center;
  }
`

export const SImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  width: 100vw;
  min-width: var(--minWidth);
  aspect-ratio: 2; 
  flex-shrink: 0;

`
export const SSlide = styled.div`
`
