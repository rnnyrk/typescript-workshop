import { expectType } from 'tsd';
import { Exercise0501, Exercise0502 } from './index-05';

expectType<Test05.Exercise01>(Exercise0501);
expectType<Test05.Exercise02.Fn>(Exercise0502);





module Test05 {
  export type Exercise01 = (multiply: number) => number;

  export module Exercise02 {
    type Props = {
      firstName: string;
      lastName: string;
      age: number;
      city: string;
      interests: string[];
    };

    type ReturnType = {
      name: string;
      isAdult: boolean;
      office: '010' | '020';
      developerType: 'frontend' | 'backend';
    };

    export type Fn = (props: Props) => ReturnType;
  }
}
