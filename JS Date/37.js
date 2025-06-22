// 37. Write a JavaScript function to get Timezone.
// Test Data :
// dt = new Date();
// console.log(seconds_with_leading_zeros(dt));
// "India Standard Time


option = {timeZoneName:'long'}
var s = new Date()
var formatter = new Intl.DateTimeFormat('en-US',option)
console.log(formatter.format(s))
