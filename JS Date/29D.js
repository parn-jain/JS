function getMeridiem(date = new Date()) {
  const hours = date.getHours();
  return hours < 12 ? "AM" : "PM";
}

// Example usage:
console.log(getMeridiem()); // Outputs: "AM" or "PM" depending on current time
