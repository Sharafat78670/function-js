const colors=[12,34,54,4,23,74,93,24];
//     let min=array[0];

// for (let i = 0; i < array.length; i++) {
//      const element = array[i];

//     if (array[0]> element) {
//         min = element;
//     }
    
// }
// console.log('Minimum number is (normal code): ',min)

// Function 
const array1=[12,34,54,4,23,-3,93,24];
function minNum(minimum) {
    let Min=minimum[0];
    for (let i = 0; i < minimum.length; i++) {
        const element = minimum[i];
   
       if (minimum[0]> element) {
           Min = element;
           return Min;
       } 
   }
}

const num=minNum(array1);
console.log(num);