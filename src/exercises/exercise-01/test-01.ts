import { expectType } from 'tsd';
import Test from './index-01';

// 1. Basics
expectType<number>(Test.a);
expectType<string>(Test.b);
expectType<boolean>(Test.c);
expectType<string[]>(Test.d);
expectType<{ name: string }>(Test.e);
expectType<string | number>(Test.f);

// 2. Advanced
expectType<(string | number)[]>(Test.g);
expectType<() => void>(Test.h);
expectType<(id: number) => number>(Test.i);

// 3. Type Inference
expectType<number>(Test.j);
expectType<string>(Test.k);
expectType<boolean>(Test.l);
expectType<string[]>(Test.m);
expectType<{ name: string }>(Test.n);
expectType<string | number>(Test.o);
