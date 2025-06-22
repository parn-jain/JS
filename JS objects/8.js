function showTime() {
  const now = new Date();
  
  // Format hours, minutes, and seconds with leading zeros
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Construct time string
  const currentTime = `${hours}:${minutes}:${seconds}`;

  console.log(currentTime);
}

// Call showTime every second
setInterval(showTime, 1000);