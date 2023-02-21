import styled from 'styled-components'

export const SWrapper = styled.div`
  width: 3rem;
  color: white;
  font-weight: 800;
  border-radius: 3rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  position: fixed;
  height: auto;
  background-color: var(--secondary);
  bottom: 3rem;
  right: 3rem;
  align-items: center;
  padding: 1rem;
  svg{
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform .3s;
  }
  svg:hover{
    transform: scale(1.3);
  }
`
