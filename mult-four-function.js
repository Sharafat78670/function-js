function multiply(num1, num2, num3, num4) {
    if (isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)) {
        return "Please input a number....";
    }
    const mul = num1 * num2 * num3 * num4;
    return mul;
}
console.log(multiply(5, 3, 5, 6));