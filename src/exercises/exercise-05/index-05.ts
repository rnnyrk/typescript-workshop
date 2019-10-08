/* 01
 * ======================================================
 * TODO: Type the parameters and return type of this function
 * ======================================================*/
const Exercise0501 = (multiply = 2) => {
  const count = 2;
  return count + multiply;
};

/* 02
 * ======================================================
 * TODO: Return an object based on the parameters and const
 * ======================================================*/
const Exercise0502 = ({
  firstName, lastName, age, city, interests,
}) => {
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

export default {
  Exercise0501,
  Exercise0502,
};
