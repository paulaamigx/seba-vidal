import { DateCard, Title } from '@/components'
import { SWrapper } from '@/styles/molecules/Dates'
import { UpcomingDates } from '@/data/Dates'

const Dates= () => {
  return(
    <SWrapper id='fechas'>
      <Title text='Fechas'/>
      {UpcomingDates.map(date =>
        <DateCard key={date.name} {...date}/>)}
    </SWrapper>
  )
}

export default Dates
