const array = [1, 2, 3, 5, 6, 7, "stybol", "bolean"];
const massive = array.filter((index) => typeof index == "number");
const massive1 = array.filter((index) => typeof index == "string");
let b = [...massive]
let n = [...massive1]
console.log(b);
console.log(n);