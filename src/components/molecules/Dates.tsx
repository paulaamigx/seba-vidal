import { STitle, SWrapper } from '@/styles/molecules/Dates'
import DateCard from '../atoms/DateCard'
import { UpcomingDates } from '@/data/Dates'

const Dates= () => {
  return(
    <SWrapper id='fechas'>
      <STitle> Fechas </STitle>
      {UpcomingDates.map(date =>
        <DateCard key={date.name} {...date}/>)}
    </SWrapper>
  )
}

export default Dates
