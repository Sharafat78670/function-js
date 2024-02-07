function make_avg(array) {

    // if (typeof array !== 'array') {
    //     return "Please input a array..."
    // }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof array[i] !== 'number') {
            return "Please input a number for this array...."
        }

        sum += element;
    }
    const ave = sum / array.length;
    return ave;
}
console.log(make_avg([2, 5, 4, 5, 6]))