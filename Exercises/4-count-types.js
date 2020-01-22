'use strict';

const countTypesInArray = array => {
  const typesCount = {};
  for (const val of array) {
    const type = typeof val;
    const count = typesCount[type] || 0;
    typesCount[type] = count + 1;
  }
  return typesCount;
};

module.exports = { countTypesInArray };
