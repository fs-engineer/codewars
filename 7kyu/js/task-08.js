'use strict';

//ПОЛИМОРФ
const polindrome = function (polin) {
  for (let i = 0; i < polin.length; i++) {
    if (polin.split('')[i] === polin.split('').reverse()[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(polindrome('alla'));
console.log(polindrome('abarab'));
console.log(polindrome('ara'));
