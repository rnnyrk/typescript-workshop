import { expectType } from 'tsd';
import Test01 from './index-01';

// 1. Basics
expectType<Test01.a>(Test01.a);
expectType<Test01.b>(Test01.b);
expectType<Test01.c>(Test01.c);
expectType<Test01.d>(Test01.d);
expectType<Test01.e>(Test01.e);
expectType<Test01.f>(Test01.f);

// 2. Advanced
expectType<Test01.g>(Test01.g);
expectType<Test01.h>(Test01.h);
expectType<Test01.i>(Test01.i);

// 3. Type Inference
expectType<Test01.j>(Test01.j);
expectType<Test01.k>(Test01.k);
expectType<Test01.l>(Test01.l);
expectType<Test01.m>(Test01.m);
expectType<Test01.n>(Test01.n);
expectType<Test01.o>(Test01.o);






module Test01 {
  export type a = number;
  export type b = string;
  export type c = boolean;
  export type d = string[];
  export type e = { name: string };
  export type f = string | number;
  export type g = (string | number)[];
  export type h = () => void;
  export type i = (id: number) => number;
  export type j = number;
  export type k = string;
  export type l = boolean;
  export type m = string[];
  export type n = { name: string };
  export type o = string | number;
}
