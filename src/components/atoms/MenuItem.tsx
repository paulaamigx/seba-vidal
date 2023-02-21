import { SWrapper } from '@/styles/atoms/MenuItem'

interface Props {
  text: string,
  onClick?: ()=>void
}

const MenuItem = ({text, onClick}:Props) => {
  return(
    <SWrapper onClick={onClick}>
      {text}
    </SWrapper>
  )
}

export default MenuItem
