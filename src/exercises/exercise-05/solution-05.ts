/* 01
 * ======================================================
 * TODO: Type the parameters and return type of this function
 * ======================================================*/
const Exercise0501 = (multiply: number): number => {
  const count: number = 2;
  return count * multiply;
};

/* 02
 * ======================================================
 * TODO: Return an object based on the parameters and const
 * ======================================================*/
const Exercise0502 = ({
  firstName, lastName, age, city, interests,
}: ParametersProps): ReturnPersonProps => {
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

type ParametersProps = {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  interests: string[];
}

type ReturnPersonProps = {
  name: string;
  isAdult: boolean;
  office: '010' | '020';
  developerType: 'frontend' | 'backend';
}

export {
  Exercise0501,
  Exercise0502,
};
