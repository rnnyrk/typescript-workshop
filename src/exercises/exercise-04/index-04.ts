/*
 * ======================================================
 * Exercise 4
 * Reading errors
 *
 * TO RUN TEST
 * npm run test-4
 * ======================================================*/


function exercise04(isUuid: boolean) {
  /* 01. Reading a basic error
  * ======================================================
  * TODO:
  * 1. Mouse over the error to see what is going wrong
  * 2. Fix the typing error by fixing the 'ID' type
  * ======================================================*/
  type ID = number;

  let id: ID = isUuid ? 'a3b21' : 1;



  /* 02. Fix type errors
   * ======================================================
   * TODO:
   * - Fix the typing error by changing the 'CompanyProps' type
   * (do not change the value of the company const)
   * ======================================================*/
  type Employee = {
    name: string;
    age: number;
    city: string;
    interests: string[];
  };

  type CompanyProps = {
    name: string;
    employees: Employee[];
  }

  const company: CompanyProps = {
    name: 'Label A',
    employees: [
      {
        name: 'Jorn Bostelaar',
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
