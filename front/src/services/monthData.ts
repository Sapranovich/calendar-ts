import * as CONSTANTS from "../constants";

// Проверка, является ли год высокосным
function isLeapYear(year: number): boolean {
  return !(year % 4 || (!(year % 100) && year % 400));
}

// Рассчет количества дней в текущем месяце
function getDaysInMonth(date: Date): number {
  const month = date.getMonth();
  const year = date.getFullYear();
  if (isLeapYear(year) && month === 1) {
    return CONSTANTS.DAYS_IN_MONTH[month] + 1;
  } else {
    return CONSTANTS.DAYS_IN_MONTH[month];
  }
}

// Рассчет дня недели (в USA воскресенье считается 0 днем)
function getDayOfWeek(date: Date): number {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return 6;
  return dayOfWeek - 1;
}

type DataItemType = {
  date: Date;
  isCurrentMonth: boolean;
}

//  Рассчет сетки текущего(выбранного) месяца
function monthData(year: number, month: number): Array<DataItemType[]> {
  const data: Array<DataItemType[]> = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / CONSTANTS.DAYS_WEEK; i++) {
    data[i] = [];
    for (let j = 0; j < CONSTANTS.DAYS_WEEK; j++) {
      if (i === 0 && j < monthStartsOn) {
        data[i][j] = {
          date: new Date(year, month, day - (monthStartsOn - j)),
          isCurrentMonth: false,
        };
      } else if (day > daysInMonth) {
        data[i][j] = {
          date: new Date(year, month, day++),
          isCurrentMonth: false,
        };
      } else {
        data[i][j] = {
          date: new Date(year, month, day++),
          isCurrentMonth: true,
        };
      }
    }
  }
  return data;
}

export default monthData;
