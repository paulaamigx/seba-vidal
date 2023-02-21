import Image from 'next/image'
import styled from 'styled-components'

export const SSlide = styled.div`
  position: relative;
  div{
    position: absolute;
  }
`

export const SWrapper = styled.div`
  width: 100vw;
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  >*{
    scroll-snap-align: center;
  }
  ${SSlide}:nth-child(1){
    div{
      font-size: 1.2rem;
      background-color: rgba(255,255,255,.1);
      padding: 3rem;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      border-radius: .2rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
  ${SSlide}:nth-child(2){
    div{
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      font-weight: 800;
    }
    div:nth-child(1){
      font-size: 3rem;
      color: var(--main);
      z-index: 2;
    }
    div:nth-child(2){
      font-size: 3.4rem;
      color: var(--secondary);
      z-index: 1;
    }
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

export const SButton = styled.span`
  background-color: var(--darkSecondary);
  color: white;
  font-weight: 600;
  padding: .8rem;
  cursor: pointer;
  border-radius: .3rem;
  &:hover{
    opacity: .8;
  }
`
