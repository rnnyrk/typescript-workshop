/*
  * ======================================================
  * Exercise 3
  * Creating and reusing types
  *
  * TO RUN TEST
  * npm run test-3
  * ======================================================*/



/* 1.
 * ======================================================
 * TODO:
 * 1. Type the 'person' object from exercise0301.
 * 2. Add type to 'person' in exercise0301.
 * ======================================================*/

export type Person = {};


export function exercise0301() {
  /* 01
  * ======================================================
  * TODO: Type the person object
  * ======================================================*/

  const person = {
    name: 'Typescript fanboy',
    age: 25,
    city: 'Amsterdam',
    interests: ['React', 'Styled Components', 'React Native'],
  };







  /*
  * ======================================================
  * Do not touch this
  * ======================================================*/
  return { person };
}



/* 2.
 * ======================================================
 * TODO:
 * 1. Type the 'company' object in exercise0302.
 * 2. Reuse the 'person' type from exercise0301.
 * 3. Add type to 'company' in exercise0302.
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
