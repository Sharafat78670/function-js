function count_zero(Binary) {
   const count=(Binary.match(/0/g)||[]).length;
   return count;
}

console.log(count_zero('010101010010000'))