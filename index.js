const test = (a, b) => {

  return a.includes(b) ? b + a : a + b;

};

console.log(test('cheese', 'cake'));