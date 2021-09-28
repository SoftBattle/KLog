import moment from "moment"

export function timeFormNow(date: Date) {
  return moment(date).fromNow()
}

export function timeFormater(date: Date) {
  return moment(date).format('YYYY-MM-DD hh:mm:ss')
}