/*
Implement a Matching Object Filter
In this lab, we create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.


User Stories:

1. We must have a `whatIsInAName` function that accepts two arguments, an array of objects and a source object.
2. The `whatIsInAName` function must return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
3. If no objects match all the key–value pairs from the source, the function should return an empty array. For example:
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
should return [{ first: "Tybalt", last: "Capulet" }]
*/

const whatIsInAName = (objArray, objSource) => {
  let sourceAsArray = [];
  for (let key in objSource) sourceAsArray.push(`${key}${objSource[key]}`);
  let finalArray = [];
  for (let obj of objArray) {
    let keyValues = [];
    for (let key in obj) keyValues.push(`${key}${obj[key]}`);
    if (sourceAsArray.every((num) => keyValues.includes(num)))
      finalArray.push(obj);
  }
  return finalArray;
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
); //[ { first: 'Tybalt', last: 'Capulet' } ]

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);//[ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);//[ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);//[ { apple: 1, bat: 2, cookie: 2 } ]

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
);//[ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));//[]
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}));//[]
