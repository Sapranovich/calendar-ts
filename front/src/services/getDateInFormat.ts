function getDateInFormat(dateInMilliseconds: number): string {
  const date = new Date(dateInMilliseconds);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day < 10 ? "0" + day : day}-${month < 10 ? "0" + month : month}-${year}`;
}

export default getDateInFormat;
