function number(num) {
    if (isNaN(num)||num<0) {
        return "Please input valid number..."
    }
    if (num%2==1) {
        return num*2;
    }
     return num/2;
}
console.log(number(2))