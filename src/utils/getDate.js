// yyyy-MM-dd HH:MM:SS当前时间
const curentYearMonthDayHourMinSecond = function () {
  var now = new Date()
  var year = now.getFullYear()// 年
  var month = now.getMonth() + 1// 月
  var day = now.getDate()// 日
  var hh = now.getHours()// 时
  var mm = now.getMinutes()// 分
  var ss = now.getSeconds()// 秒
  var clock = year + '-'
  if (month < 10) {
    clock += '0'
  }
  clock += month + '-'
  if (day < 10) {
    clock += '0'
  }
  clock += day + ' '
  if (hh < 10) {
    clock += '0'
  }
  clock += hh + ':'
  if (mm < 10) {
    clock += '0'
  }
  clock += mm + ':'
  if (ss < 10) {
    clock += '0'
  }
  clock += ss
  return clock
}

// yyyy-MM-dd当前时间
const curentYearMonthDay = function () {
  var now = new Date()
  var year = now.getFullYear()// 年
  var month = now.getMonth() + 1// 月
  var day = now.getDate()// 日
  var clock = year + '-'
  if (month < 10) {
    clock += '0'
  }
  clock += month + '-'
  if (day < 10) {
    clock += '0'
  }
  clock += day
  return clock
}

// 获取当前日期得前或后的月
const beforeAndAfterMonth = function (date) {
  var date1 = new Date()
  var date2 = new Date(date1)
  date2.setDate(date1.getDate() + date)
  var day = date2.getDate()
  return day
}

// 获取当前日期得前或后的日
const beforeAndAfterDay = function (date) {
  var date1 = new Date()
  var date2 = new Date(date1)
  date2.setDate(date1.getDate() + date)
  var day = date2.getDate()
  return day
}

// 获取当前日期得前或后的年月日
const beforeAndAfterYearMonthDay = function (date) {
  var date1 = new Date()
  var date2 = new Date(date1)
  date2.setDate(date1.getDate() + date)
  var year = date2.getFullYear()
  var month = date2.getMonth() + 1
  var day = date2.getDate()
  var clock = year + '-'
  if (month < 10) {
    clock += '0'
  }
  clock += month + '-'
  if (day < 10) {
    clock += '0'
  }
  clock += day
  return clock
}

// 获取当前日期得前或后的年月日不补全
const beforeAndAfterYearMonthDayNot = function (date) {
  var date1 = new Date()
  var date2 = new Date(date1)
  date2.setDate(date1.getDate() + date)
  var year = date2.getFullYear()
  var month = date2.getMonth() + 1
  var day = date2.getDate()
  var clock = year + '-' + month + '-' + day
  return clock
}

// 获取当前日期得前或后的年月日时分秒
const beforeAndAfterYearMonthDayHourMinSecond = function (date) {
  var date1 = new Date()
  var date2 = new Date(date1)
  date2.setDate(date1.getDate() + date)
  var year = date2.getFullYear()
  var month = date2.getMonth() + 1
  var day = date2.getDate()
  var hh = date2.getHours()// 时
  var mm = date2.getMinutes()// 分
  var ss = date2.getSeconds()// 秒
  var clock = year + '-'
  if (month < 10) {
    clock += '0'
  }
  clock += month + '-'
  if (day < 10) {
    clock += '0'
  }
  clock += day + ' '
  if (hh < 10) {
    clock += '0'
  }
  clock += hh + ':'
  if (mm < 10) {
    clock += '0'
  }
  clock += mm + ':'
  if (ss < 10) {
    clock += '0'
  }
  clock += ss
  return clock
}

// 月份转全英文
const monthsInEngAll = function (date) {
  // var monthsInEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // var clock = date.getDate() + '-' + monthsInEng[date.getMonth()] + '-' + date.getFullYear()
  var monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var clock = monthsInEng[date.getMonth()]
  return clock
}

// 月份转半英文
const monthsInHalfEng = function (date) {
  // var monthsInEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // var clock = date.getDate() + '-' + monthsInEng[date.getMonth()] + '-' + date.getFullYear()
  var monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var clock = monthsInEng[date.getMonth()]
  return clock
}

// 月份转半英文
const monthsInHalfEngYYYYMMDD = function (date) {
  // var monthsInEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // var clock = date.getDate() + '-' + monthsInEng[date.getMonth()] + '-' + date.getFullYear()
  var monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var clock = monthsInEng[date.split('-')[1]]
  return clock
}

export {
  curentYearMonthDayHourMinSecond,
  curentYearMonthDay,
  beforeAndAfterMonth,
  beforeAndAfterDay,
  beforeAndAfterYearMonthDay,
  beforeAndAfterYearMonthDayNot,
  beforeAndAfterYearMonthDayHourMinSecond,
  monthsInEngAll,
  monthsInHalfEng,
  monthsInHalfEngYYYYMMDD
}
