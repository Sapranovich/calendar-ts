export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const WEEK_DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


export const DAYS_WEEK = 7;
export const HOURS_DAY = 24;

export const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const REG_EXP_CHECK_DATE =
  "^(?=\\d{2}([\\/])\\d{2}\\1\\d{4}$)(?:0[1-9]|1\\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\\d{4}$";
export const BACKEND_URL = "http://localhost:3001";

export const BASIC_ROLES = {
  ADMIN: "admin",
  USER: "user",
  VIEWER: "viewer",
};

export const MODAL_TYPES = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  VIEW: "VIEW",
};
