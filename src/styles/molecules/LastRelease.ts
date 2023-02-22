import YouTube from 'react-youtube'
import styled from 'styled-components'

const color = 'var(--darkSecondary)'
export const SWrapper = styled.div`
  width: 100%:
  height: fit-content;
  padding: 11rem 0 11rem 0;
  background: linear-gradient(to bottom, 
    var(--black), ${color} 5%,
    var(--black) 10%, var(--black) 90%,
    ${color} 95%, var(--black) 100%);

  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5rem;
  >*{
    position: relative;
    z-index: 1;
  }
`

export const SYouTube=styled(YouTube)`
  width: 40rem;
  aspect-ratio: 16/9;
  >*{
    width: 100%;
    aspect-ratio: 16/9;
    height: auto;
  }
`
