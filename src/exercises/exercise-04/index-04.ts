export default () => {
  /* 01
  * ======================================================
  * TODO: Fix the typing error by adjusting type ID
  * ======================================================*/
  type ID = number;

  let id: ID = 1;
  id = 'a3b21';

  /* 02
  * ======================================================
  * TODO: Fix the typing error by adjusting type CompanyProps
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

  /* 03
  * ======================================================
  * TODO: Fix the typing error by adjusting type ColorProps
  * ======================================================*/
  type ColorProps = 'white';
  let color: ColorProps = 'white';
  color = 'red';
  color = 'blue';
  color = 'yellow';
};
