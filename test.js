// const string = 'My name is Lonwabo and my age is 200';
// const regex = /name is [a-zA-Z]+/;
// // const numregex = /age is [0-9]{1,3}$/;
// const numregex = /age is \d/; // For digits
// const optionalRegEx = /agey?/;

// const isExisting = regex.test(string);
// if (isExisting) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// const numisExisting = numregex.test(string);
// if (numisExisting) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// const optisExisting = optionalRegEx.test(string);
// if (optisExisting) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// const newString = 'My name is lonwabo'

// const regex = /name is ([a-z]+)/;
// const match = regex.exec(newString)

// console.log(match)
// if (match) {
//     name = match[1]
//     console.log(name)
// } else {
//     console.log('Sodium Bromide')
// }

const fileNames = 'filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt';
const fileRegEx = /(\w+)\.mp3/g;
let match = fileRegEx.exec(fileNames);

while (match) {
    const file_name = match[1];
    console.log(file_name);
    match = fileRegEx.exec(fileNames);
}