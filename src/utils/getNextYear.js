/**
 * 获取下一年的当前时间
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 * @boolean trur | false => return yyyy-mm-dd | yyyy-mm
 */
const getNextYear = function (date, boolean) {
  var d = new Date(date)
  d.setMonth(d.getMonth() + 1 + 12) // 加6个月，前面的+1补1，后面的6才是要计算的偏移量
  // 同理，可以加六天：getDate()+6，加一年：getYear()+1
  // 取得计算后的日期
  // alert(d+"月后是"+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate())
  var month = Number(d.getMonth()) < 10 ? '0' + d.getMonth() : d.getMonth()
  var day = Number(d.getDate()) < 10 ? '0' + d.getDate() : d.getDate()
  var t2 = ''
  if (boolean) {
    t2 = d.getFullYear() + '-' + month + '-' + day
  } else {
    t2 = d.getFullYear() + '-' + month
  }
  return t2
}

export default getNextYear
