/* eslint-disable */
// eslint-disable-next-line no-unused-vars
// const getItem = async () => {
//   return await fetch('http://google.com');
// };

const { default: axios } = require('axios');

////////////////////////////////////////////
////////////////////////////////////////////
// function sum(a, b) {
//   return a + b;
// }

// // eslint-disable-next-line no-undef
// module.exports = sum;

////////////////////////////////////////////
////////////////////////////////////////////

// function cloneArray(array) {
//   return [...array];
// }

// module.exports = cloneArray;

//////////////////////////////////////////
//////////////////////////////////////////

// function subtract(a, b) {
//   return a - b;
// }

// // eslint-disable-next-line no-undef
// module.exports = subtract;

//////////////////////////////////////////
//////////////////////////////////////////

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefines
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// const axios = require('axios');

const functions = {
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Brad' };
    user['lastName'] = 'Traversy';
    return user;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => 'error'),
};

module.exports = functions;
