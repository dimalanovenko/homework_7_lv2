// name, age, gender, country, result
const userName = "Anna";
const age = 20;
const gender = "female";
const country = "Germany";

let result;

if ((age > 18 && typeof userName !== 'undefined') || (gender !== "man" && country === "Germany")) {
    result = true;
} else {
    result = false;
}

console.log(result); 
// true

