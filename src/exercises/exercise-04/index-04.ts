/*
 * ======================================================
 * Exercise 4
 * Reading errors
 *
 * TO RUN TEST
 * npm run test-4
 * ======================================================*/



/* 1.
 * ======================================================
 * TODO:
 * 1. Mouse over the error to see what is going wrong.
 * 2. Fix the typing error by fixing the 'ID' type.
 * ======================================================*/

function exercise04(isUuid: boolean) {
  type ID = number;

  let id: ID = isUuid ? 'a3b21' : 1;



  /* 2.
   * ======================================================
   * TODO:
   * - Fix the typing error by fixing the 'CompanyProps' type.
   * ======================================================*/
  type CompanyProps = {
    name: string;
    employees: {
      name: string;
      age: number;
      city: string;
      interests: string[];
    }[];
  }

  const company: CompanyProps = {
    name: 'Label A',
    employees: [
      {
        name: 'Sander Vispoel',
        age: 25,
        city: 'Utrecht',
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
 return { id, company };
};

export default exercise04(true);
