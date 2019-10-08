export default () => {
  // 01 - Create ID type with number and string possibility
  type ID = number | string;

  let id: ID = 1;
  id = 'a3b21';

  // 02 - Make interests optional
  type CompanyProps = {
    name: string;
    employees: {
      name: string;
      age: number;
      city: string;
      interests?: string[];
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
        name: 'Sander Vispoel',
        age: 25,
        city: 'Utrecht',
        interests: ['Styled Components', 'React Native'],
      },
    ],
  };

  // 03 - Add oneOf type to ColorProps
  type ColorProps = 'white' | 'red' | 'blue' | 'yellow';
  let color: ColorProps = 'white';
  color = 'red';
  color = 'blue';
  color = 'yellow';
};
