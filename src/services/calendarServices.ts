import * as CONSTANTS from "../constants.js";

// Проверка, является ли год высокосным
function isLeapYear(year: number) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

// Рассчет количества дней в текущем месяце
function getDaysInMonth(date: Date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  if (isLeapYear(year) && month === 1) {
    return CONSTANTS.DAYS_IN_MONTH[month] + 1;
  } else {
    return CONSTANTS.DAYS_IN_MONTH[month];
  }
}

// Рассчет дня недели (в USA воскресенье считается 0 днем)
function getDayOfWeek(date: Date) {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return 6;
  return dayOfWeek - 1;
}

//  Рассчет сетки текущего(выбранного) месяца
function currentMonthData(year: number, month: number) {
  const data: Array<Array<Date | null>> = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (
    let i = 0;
    i < (daysInMonth + monthStartsOn) / CONSTANTS.DAYS_WEEK;
    i++
  ) {
    data[i] = [];
    for (let j = 0; j < CONSTANTS.DAYS_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        data[i][j] = null;
      } else {
        data[i][j] = new Date(year, month, day++);
      }
    }
  }
  return data;
}

export default currentMonthData;
