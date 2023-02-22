import {StaticImageData} from 'next/image'

export interface IDate{
  name: string,
  date: string,
  time: string,
  link?: string,
  image: StaticImageData
}
