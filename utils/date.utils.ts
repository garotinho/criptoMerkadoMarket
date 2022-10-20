import moment from 'moment'

const today = moment().locale('es-es').format('ll')
const yesterday = moment().subtract(1, 'day').locale('es-es').format('ll')

export const convertTimestampToDateTimeTag = (timestamp: number) => {
  return moment.unix(timestamp).locale('es-es').format()
}

export const diffToNowInDays = (date: number) => {
  const value = moment(date)
  const now = moment()
  return now.diff(value, 'days')
}

export const diffToNowInDaysTimestamp = (timestamp: number) => {
  const value = moment.unix(timestamp)
  const now = moment()
  return now.diff(value, 'days')
}

export const getDateChatFormat = (date: any) => {
  const value = moment(date).locale('es-es').format('ll')
  return value === today
    ? 'Hoy' : value === yesterday
    ? 'Ayer' : moment(date).format('DD/MM/YY')
}

export const converDateFormat = (date: number) => {
  return moment(date).locale('es-es').format('DD/MM/YYYY')
}

export const convertDate = (date: number) => {
  return moment(date).locale('es-es').format('ll')
}
