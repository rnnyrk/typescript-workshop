export default () => {
  /* 01
  * ======================================================
  * TODO: Extract the type shape to a type variable
  * ======================================================*/
  type CompanyType = {
    name: string;
  }

  const company: CompanyType = { name: 'Label A' };
};
