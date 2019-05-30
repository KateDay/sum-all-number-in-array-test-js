function sumItems(array) {
  // Sum all the numbers in the array
  sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item)
    } else {
      sum += item
    }
  }  
  return sum;
}

module.exports = sumItems;

console.log(sumItems([1, 3, 3, 5, 5]))
/*  
    expect(sumItems([25])).to.equal(25);

    expect(sumItems([1, 3, 3, 5, 5])).to.equal(17);

    expect(sumItems([[1, 2, [[3], 4]], 5, []])).to.equal(15);

    expect(sumItems([[[5], [[[4]]], [[3], 2]], 1, []])).to.equal(15);

*/
