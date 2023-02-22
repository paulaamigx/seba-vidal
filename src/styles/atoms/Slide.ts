import styled from 'styled-components'

export const SWrapper = styled.div`
  position: relative;
  aspect-ratio: 2; 
  width: 100vw;
  min-width: var(--minWidth);
  flex-shrink: 0;
  overflow-y:hidden;
  div{
    position: absolute;
  }
`

export const SEdge = styled.div`
  width: 150%;
  left: -25%;
  height: 120%;
  position: absolute;
  bottom: 0px;
  box-shadow: inset -20px -20px 10px 1px var(--black);
`
