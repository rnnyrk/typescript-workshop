function Test01() {
  // number
  let a: number = 1;

  // string
  let b: string = 'Sander';

  // boolean
  let c: boolean = false;

  // Array of string
  let d: string[] = ['a'];

  // Object with property 'name' and value of type string
  let e: { name: string } = { name: 'Sander' };

  // string OR number
  let f: string | number = 'a';
  f;



  // Array of string OR number
  let g: (string | number)[] = ['a', 1];

  // Function that returns void
  let h: () => void = () => {};

  // Function with a single parameter of type number
  // Returns number
  let i: (id: number) => number = (id) => id;



  // number
  let j = 1;

  // string
  let k = 'a';

  // boolean
  let l = true;

  // Array of string
  let m = ['1'];

  // Object with property 'name' and value of type string
  let n = { name: 'a' };

  // string OR number
  let o = 1 || 'a';






  /*
  * ======================================================
  * Do not touch this
  * ======================================================*/
  return { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o };
};

export default Test01();
