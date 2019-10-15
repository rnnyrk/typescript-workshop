/*
 * ======================================================
 * Exercise 5
 * Typing functions
 *
 * TO RUN TEST
 * npm run test-5
 * ======================================================*/



/* 1.
 * ======================================================
 * TODO:
 * - Type the parameters and return type of this function
 * ======================================================*/

const Exercise0501 = (multiply) => {
  const count = 2;
  return count + multiply;
};



/* 2.
 * ======================================================
 * TODO:
 * - Return an object based on the parameters and const
 * ======================================================*/

const Exercise0502 = ({ firstName, lastName, age, city, interests }) => {
  const name = `${firstName} ${lastName}`;
  const isAdult = age > 18;

  const office = city === 'Amsterdam'
    ? '020' : '010';

  const developerType = interests.includes('React')
    ? 'frontend'
    : 'backend';

  return {
    name,
    isAdult,
    office,
    developerType,
  };
};


















/*
 * ======================================================
 * Do not touch this
 * ======================================================*/
export { Exercise0501, Exercise0502 };
