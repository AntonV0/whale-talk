const input =
  "This text will be translated into Whale talk - turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

console.log(resultArray);
/* Output:
[
  'i', 'e', 'e', 'i', 'e', 'e',
  'a', 'a', 'e', 'e', 'i', 'o',
  'a', 'e', 'e', 'a', 'u', 'u',
  'e', 'e', 'i', 'e', 'e', 'a',
  'u', 'u', 'e', 'e'
]
*/
const resultString = resultArray.join("").toUpperCase();

console.log(resultString);
// IEEIEEAAEEIOAEEAUUEEIEEAUUEE