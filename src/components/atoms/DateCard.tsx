import { SBuy, SImage, SInfo, SName, SWrapper } from '@/styles/atoms/DateCard'
import { IDate } from '@/types/dates'

const DateCard = (props: IDate) => {
  return(
    <SWrapper>
      <SImage alt='' src={props.image}/>
      <SName> {props.name} </SName>
      <SInfo> {props.date} - {props.time} </SInfo>
      <SBuy hover={!!props.link}>
        {props.link? 'Entradas' : 'Gratis'}
      </SBuy>
    </SWrapper>
  )
}

export default DateCard
