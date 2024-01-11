var num = 2.500;
// .দশমিক সংখাকে নিচের দিকে নিয়ে আসে 
var num1 = Math.floor(num);
console.log(num1);


// .দশমিক সংখাকে উপরে দিকে নিয়ে আসে  
var num2 = Math.ceil(num);
console.log(num2);


/* .দশমিক সংখাকে যেমন 1.50 বা 1.6 হলে  উপরে দিকে নিয়ে আসে 
আর কম হলে যেমন 1.49 বা তার কম হলে নিচের দিকে নিয়ে আসে */
var num3 = Math.round(num);
console.log(num3);

// ভিন্ন ভিন্ন মান আসে
var num4 = Math.random() *6;
var result = Math.round(num4);
console.log(result);