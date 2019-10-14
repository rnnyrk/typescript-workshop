import { assert, IsExact, IsAny } from "conditional-type-checks";
import { Exercise0501, Exercise0502 } from './index-05';


// 1.
// Check if param is number
type Params01 = Parameters<typeof Exercise0501>[0];
assert<IsExact<Params01, Test05.Exercise01.Param>>(true);

// Check if return type is number
type Return01 = ReturnType<typeof Exercise0501>;
assert<IsExact<Return01, Test05.Exercise01.Return>>(true);


// 2.
// Check param
type Params02 = Parameters<typeof Exercise0502>[0];
assert<IsExact<Params02, Test05.Exercise02.Param>>(true);

// Check return type
type Return02 = ReturnType<typeof Exercise0502>;
assert<IsExact<Return02, Test05.Exercise02.Return>>(true);




module Test05 {
  export module Exercise01 {
    export type Param = number;
    export type Return = number;
  }

  export module Exercise02 {
    export type Param = {
      firstName: string;
      lastName: string;
      age: number;
      city: string;
      interests: string[];
    };

    export type Return = {
      name: string;
      isAdult: boolean;
      office: '010' | '020';
      developerType: 'frontend' | 'backend';
    };
  }
}
