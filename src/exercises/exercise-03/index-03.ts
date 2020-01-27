/*
 * ======================================================
 * Exercise 3
 * Creating and reusing types
 *
 * TO RUN TEST
 * npm run test-3
 * ======================================================*/



/* 01. Creating a type object
 * ======================================================
 * TODO:
 * 1. Type the 'Person' object
 * 2. Add the type to the 'person' const
 * ======================================================*/

export type Person = {};

export function exercise0301() {
  const person = {
    name: 'TypeScript fanboy',
    age: 25,
    city: 'Amsterdam',
    interests: ['React', 'Styled Components', 'React Native', 'ES6'],
  };







  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { person };
}



/* 02. Re-using types
 * ======================================================
 * TODO:
 * 1. Type the 'Company' object
 * 2. Reuse the 'Person' type within the new 'Company' type
 * 3. Add type to the 'company' const
 * ======================================================*/

export type Company = {};

export function exercise0302() {
  const company = {
    name: 'Label A',
    employees: [
      {
        name: 'Sander Vispoel',
        age: 25,
        city: 'Utrecht',
        interests: ['SSR', 'React'],
      },
      {
        name: 'Ronny Rook',
        age: 25,
        city: 'Amsterdam',
        interests: ['Styled Components', 'React Native'],
      },
    ],
  };







  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { company };
};
