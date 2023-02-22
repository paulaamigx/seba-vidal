import Image from 'next/image'
import styled from 'styled-components'

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  div{
    font-size: 1.2rem;
    background-color: rgba(255,255,255,.1);
    padding: 3rem;
    right: 4rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: .2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`
export const SImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover; 
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
