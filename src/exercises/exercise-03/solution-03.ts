export default () => {
  // 01 - Create a person object
  type PersonProps = {
    name: string;
    age: number;
    city: string;
    interests: string[];
  };

  const person: PersonProps = {
    name: 'Typescript fanboy',
    age: 25,
    city: 'Amsterdam',
    interests: ['React', 'Styled Components', 'React Native'],
  };

  // 02 - Create a company and reuse the person type for employees
  type CompanyProps = {
    name: string;
    employees: PersonProps[];
  }

  const company: CompanyProps = {
    name: 'Label A',
    employees: [
      {
        name: 'Sander Vispoel',
        age: 25,
        city: 'Utrecht',
        interests: ['SSR', 'React'],
      },
      {
        name: 'Sander Vispoel',
        age: 25,
        city: 'Utrecht',
        interests: ['Styled Components', 'React Native'],
      },
    ],
  };
};
