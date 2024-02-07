const numbers = [12, 98, 5, 42, 23, 78, 46];
console.log('The array is:',numbers)
const even =[];
const odd =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    
    if (element%2 == 0) {
        even.push(element);
    }
}
console.log('Even numbers',even)

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    
    if (element%2 == 1) {
        odd.push(element);
    }
}
console.log('Odd numbers',odd)

