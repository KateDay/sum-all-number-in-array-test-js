function sumItems(array) {
  // Sum all the numbers in the array
  
  return array.reduce((array, num) => array + num, 0)
}

module.exports = sumItems;


/*  
    expect(sumItems([25])).to.equal(25);

    expect(sumItems([1, 3, 3, 5, 5])).to.equal(17);

    expect(sumItems([[1, 2, [[3], 4]], 5, []])).to.equal(15);

    expect(sumItems([[[5], [[[4]]], [[3], 2]], 1, []])).to.equal(15);

  */