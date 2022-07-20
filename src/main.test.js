/* eslint-disable */
// eslint-disable-next-line no-unused-vars, no-undef
// const sum = require('./main');

// test('properly adds two numbers', () => {
//   expect(sum(1, 2)).toBe(3);
// });

//////////////////////////////////////////
//////////////////////////////////////////
// const cloneArray = require('./main');

// test('properly clones array', () => {
//   const array = [1, 2, 3];
//   expect(cloneArray(array)).toEqual(array);
//   expect(cloneArray(array)).not.toBe(array);
// });

//////////////////////////////////////////
//////////////////////////////////////////
const subtract = require('./main');

test('properly subtracting two numbers', () => {
  expect(subtract(1, 2)).toBe(-1);
});
