import { assert, IsExact } from "conditional-type-checks";
import { exercise0301, exercise0302, Person, Company } from './index-03';

// 1.
// Check Person type
assert<IsExact<Person, Test03.Exercise01.Person>>(true);

// Check person object type
const { person } = exercise0301();
assert<IsExact<typeof person, Test03.Exercise01.Person>>(true);


// 2.
// Check Person type
assert<IsExact<Company, Test03.Exercise02.Company>>(true);

// Check company object type
const { company } = exercise0302();
assert<IsExact<typeof company, Test03.Exercise02.Company>>(true);






module Test03 {
  export module Exercise01 {
    export type Person = {
      name: string;
      age: number;
      city: string;
      interests: string[];
    };
  }

  export module Exercise02 {
    export type Company = {
      name: string;
      employees: Exercise01.Person[];
    };
  }
}
