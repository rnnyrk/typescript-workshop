import { assert, IsExact } from "conditional-type-checks";
import exercise04 from './index-04';

const { company, id } = exercise04;

// 1.
// Check id type
assert<IsExact<typeof id, Test04.Id>>(true);


// 2.
// Check company type
assert<IsExact<typeof company, Test04.Company>>(true);






module Test04 {
  export type Id = number | string;

  export type Company = {
    name: string;
    employees: {
      name: string;
      age: number;
      city: string;
      interests?: string[];
    }[];
  };
}
