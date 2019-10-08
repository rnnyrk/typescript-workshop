export default () => {
  const a: number = 1;
  const b: string = 'Hello';
  const c: boolean = false;
  const d: string[] = ['Amsterdam', 'Rotterdam'];
  const e: { name: string } = { name: 'Label A' };

  let f: string | number = 'fulltime';
  f = 40;

  const g: (string | number)[] = ['11', 21, '23', '77', 42, 55];

  const h: () => void = () => {};
  const i: (id: number) => number = (id) => { return id; };
};
