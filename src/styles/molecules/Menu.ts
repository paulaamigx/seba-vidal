import styled from 'styled-components'

export const SWrapper = styled.div<{light: boolean}>`
  display: flex;
  padding: 0 3rem;
  align-items: center;
  height: 5rem;
  position: fixed;
  top: 0,
  right: 0;
  left: 0;
  width: 100%;
  z-Index: 2;
  min-width: var(--minWidth);
  margin-bottom: -5rem;
  overflow-x: scroll;
  ${props => `
    div{
      color: ${props.light? 'rgba(255,255,255,.2)' : 'black'};
      &:hover{
        color: var(--main);
      }
    }
  `}
`

export const SLogo = styled.p`
  font-size: 2rem;
  font-weight: 900;
  margin-right: auto;
  background: linear-gradient(var(--main), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
