
// Преобразование числового значения часа в формат чч:мм
function getTimeInFormat(hour:any){
  return hour>=10 ? `${hour}:00`:`0${hour}:00`;
}

export default getTimeInFormat;