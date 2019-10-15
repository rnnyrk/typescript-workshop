/*
  * ======================================================
  * Exercise 4
  * Reading errors
  *
  * TO RUN TEST
  * npm run test-4
  * ======================================================*/



function exercise04(isUuid: boolean) {
  /* 01
  * ======================================================
  * TODO:
  * - Fix the typing error by adjusting type ID
  * ======================================================*/
  type ID = number;

  let id: ID = isUuid ? 'a3b21' : 1;



  /* 02
  * ======================================================
  * TODO:
  * - Fix the typing error by adjusting type CompanyProps
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
