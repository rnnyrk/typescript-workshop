import { expectType } from 'tsd';
import Test from './index-02';

type Solution = { name: string };

expectType<Solution>(Test.solution);
