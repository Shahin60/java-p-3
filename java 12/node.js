
let mixmum = [30, 51, 69, 78, 45, 16, 85, 95, 35];
let boro = mixmum[0];
for (let i = 0; i < mixmum.length; i++) {
    let mutNumber = mixmum[i];

    if (mutNumber > boro) {
        boro = mutNumber;

    }

}
console.log("max nimber", boro);










let mix = [69, 58, 65, 68, 89, 92, 74, 15, 36, 45];
let number = mix[0];
for (let i = 0; i < mix.length; i++) {
    let valu = mix[i];
    if (valu > number) {
        number = valu;
    }
}
console.log("max number", number);



let arrey = [65, 69, 48, 85, 12, 36, 25];
let num =0;
for (let i = 0; i < arrey.length; i++) {
    let result = arrey[i];
   num = num + result;
}
console.log(" mut number", num);
