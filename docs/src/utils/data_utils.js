

// Date() -> yyyy-MM-dd
export function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    const dateString = `${year}-${month}-${day}`;
  
    return dateString;
  }
  

// yyyy-MM-dd -> Date()
export function parseDate(formattedDate) {
  // 문자열을 '-'를 기준으로 나누어 배열로 만듦
  const dateArray = formattedDate.split('-');

  // 년, 월, 일을 추출
  const year = parseInt(dateArray[0], 10);
  const month = parseInt(dateArray[1], 10) - 1;
  const day = parseInt(dateArray[2], 10);

  return new Date(year, month, day);
}

  