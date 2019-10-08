export default () => {
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

  /* 02
  * ======================================================
  * TODO: Type company and reuse the person type for employees
  * ======================================================*/
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
};
