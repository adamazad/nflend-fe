import dayjs from 'dayjs'

export const convertUtcTimestampToLocal = (utcTimestamp: number) => {
  const utcMinutesOffset = dayjs(utcTimestamp).utcOffset()
  const dateUTC = dayjs.unix(utcTimestamp).add(utcMinutesOffset, 'minutes')

  return dateUTC.unix()
}

export const convertLocalTimestampToUtc = (utcTimestamp: number) => {
  const utcMinutesOffset = dayjs(utcTimestamp).utcOffset()
  const dateUTC = dayjs.unix(utcTimestamp).add(utcMinutesOffset, 'minutes')

  return dateUTC.unix()
}
