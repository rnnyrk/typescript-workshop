import { expectType } from 'tsd';
import Test from './index-02';

expectType<Test02.company>(Test.solution);






module Test02 {
  export type company = { name: string };
}
