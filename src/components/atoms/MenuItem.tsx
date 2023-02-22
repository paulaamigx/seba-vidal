import Link from 'next/link'
import { SWrapper } from '@/styles/atoms/MenuItem'

interface Props {
  text: string,
  onClick?: ()=>void
}

const MenuItem = ({text, onClick}:Props) => {
  return(
    <Link
      href={`#${text.toLowerCase().replace(' ','-')}`}
      style={{ textDecoration: 'none' }}>
      <SWrapper onClick={onClick}>
        {text}
      </SWrapper>
    </Link>
  )
}

export default MenuItem
