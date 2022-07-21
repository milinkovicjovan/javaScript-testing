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
// const subtract = require('./main');

// test('properly subtracting two numbers', () => {
//   expect(subtract(1, 2)).toBe(-1);
// });

//////////////////////////////////////////
//////////////////////////////////////////

const functions = require('./main');

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy',
  });
});

//Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex (regular expressions)
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
// test('Admin should be in usernames', () => {
//   usernames = ['john', 'karen', 'admin'];
//   expect(usernames).toContain('admin');
// });

// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
