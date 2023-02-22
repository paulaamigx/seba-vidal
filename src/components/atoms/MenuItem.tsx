import Link from 'next/link'
import { SWrapper } from '@/styles/atoms/MenuItem'

interface Props {
  text: string,
  onClick?: ()=>void
}

const parseText = (text:string) =>
  text.toLowerCase()
    .replace(' ','-')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

const MenuItem = ({text, onClick}:Props) => {
  return(
    <Link
      href={`#${parseText(text)}`}
      style={{ textDecoration: 'none' }}>
      <SWrapper onClick={onClick}>
        {text}
      </SWrapper>
    </Link>
  )
}

export default MenuItem
