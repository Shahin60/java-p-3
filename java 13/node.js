//duplicat arrey

let array = [4, 5, 9, 2, 3, 2, 5, 1, 3, 1, 9, 6, 9];
let unick = [];
for (let i = 0; i < array.length; i++) {
    let elemint = array[i];
    let valu = unick.indexOf(elemint);
    if (valu == -1) {
        unick.push(elemint);
    }
}
console.log(unick);


let arrayNumber = [16, 2, 3, 64, 5, 5, 5, 88, 88, 6, 69, 7, 46, 8, 5, 9, 3];
let unickNumber = [];
for (let i = 0; i < arrayNumber.length; i++) {
    let number = arrayNumber[i];
    let number1 = unickNumber.indexOf(number);
    if (number1 == -1) {
        unickNumber.push(number);
    }

}
console.log(unickNumber);