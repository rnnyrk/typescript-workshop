/* 01
 * ======================================================
 * TODO:
 * - Type the 'person' object from exercise0301
 * - Add type to 'person' in exercise0301
 * ======================================================*/
export type Person = {
  name: string;
    age: number;
    city: string;
    interests: string[];
};

export function exercise0301() {
  /* 01
  * ======================================================
  * TODO: Type the person object
  * ======================================================*/
  const person: Person = {
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



/* 02
 * ======================================================
 * TODO:
 * - Type the 'company' object in exercise0302
 * - Reuse the 'person' type from exercise0301
 * - Add type to 'company' in exercise0302
 * ======================================================*/
export type Company = {
  name: string;
  employees: Person[];
};

export function exercise0302() {
  const company: Company = {
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
