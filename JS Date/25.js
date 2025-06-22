const options = {month:'long'}
const a = new Date(2015, 10, 1)
const formatter = new Intl.DateTimeFormat('en-US',options);
console.log(formatter.format(a))


// if you dont specify any element in options, it will not give the output even
