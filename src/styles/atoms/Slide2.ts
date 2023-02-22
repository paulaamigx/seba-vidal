import Image from 'next/image'
import styled from 'styled-components'

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
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
`
export const SImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`
