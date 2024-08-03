
 let ism1 = [];
let ism2 = [];
let ism3 = [];

let ism = ["jalol", "o", "ohror", "salom", "saloxiddi"];

for (let i = 0; i < ism.length; i++) {
  if (ism[i].includes("a")) {
    ism1.push(ism[i]);
  } else if (ism[i].includes("o")) {
    ism2.push(ism[i]);
  } else if (ism[i].includes("o , a")) {
    ism3.push(ism[i]);
  }
}
console.log(ism);
console.log("Words with 'a':", ism1.slice(ism));
console.log("Words with 'o':", ism2.slice(ism));


