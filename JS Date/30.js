function getMeridiem(date = new Date()) {
  const hours = date.getHours();
  console.log(hours)
  return hours < 12 ? "AM" : "PM";
}

console.log(getMeridiem());
