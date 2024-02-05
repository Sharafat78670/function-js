// Normal Code

const num1=46;
const num2=78;
console.log('Two number are: ',num1,num2);
if (num1 < num2) {
    console.log('Minimum number is(Normal Code) :',num1)
}
else{
    console.log('Minimum number is(Normal Code) :',num2)
}

// Function code

function Minimum(number1,number2) {
    console.log('Two number are: ',number1,number2);
    if (number1<number2) {
        return number1;
    }
    return number2;
}

const min=Minimum(26,78);
console.log('Minimum number is:(Function code) ',min)