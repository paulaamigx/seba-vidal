import Image from 'next/image'
import styled from 'styled-components'

export const SWrapper = styled.div`
  padding: 8rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  text-align: justify;
`

export const SImage = styled(Image)`
  width: 25rem;
  height: auto;
  object-fit: contain;
  border-radius: .4rem;
`

export const SText = styled.p`
  border-radius: .4rem;
  color: white;
  font-size: 1.1rem;
  width: 33rem;
  margin-top: 4rem;
  margin-left: -10rem;
  background-color: rgba(0,0,0,.5);
  padding: 2rem;
`
