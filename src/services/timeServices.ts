// Преобразование числового значения часа в формат чч:мм
function getTimeInFormat(hour: number | undefined) {
  if (typeof hour === "number") {
    return hour >= 10 ? `${hour}:00` : `0${hour}:00`;
  } else {
    return "ХХ:ХХ";
  }
}

export default getTimeInFormat;
