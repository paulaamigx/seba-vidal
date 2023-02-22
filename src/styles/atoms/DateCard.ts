import Image from 'next/image'
import styled from 'styled-components'

export const SWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: white;
  justify-content: center;
  align-items: center;
  width: 12rem;
  gap: 1rem 0rem;
`

export const SImage = styled(Image)`
  width: 100%;
  aspect-ratio: 1;
  height: auto;
  border-radius: .4rem;
`
export const SName = styled.p`
  font-weight: 600;
`

export const SInfo = styled.p`
`

export const SBuy = styled.p<{hover: boolean}>`
  border: 1px solid white;
  padding: .5rem 1rem;
  ${props => props.hover && `
    cursor: pointer;
    &:hover{
      background-color: white;
      color: var(--main);
  `}
  }
`
