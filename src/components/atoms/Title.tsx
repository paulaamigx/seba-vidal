import { STitle } from '@/styles/atoms/Title'

interface Props{
  text:string,
  className?:string
}

const Title = ({text, className}:Props) => {
  return(
    <STitle className={className}>{text}</STitle>
  )
}

export default Title
