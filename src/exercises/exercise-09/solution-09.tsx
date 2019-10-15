/*
 * ======================================================
 * Exercise 9
 * Typing Redux
 *
 * TO RUN TEST
 * npm run test-9
 * ======================================================*/



import { useSelector } from 'react-redux';


/*
 * ======================================================
 * TODO:
 * 1. Create a UserState type with name and email
 * 2. Create a ReduxState type and add the UserState
 * 3. Get the data from UserState with mapStateToProps as 'user'
 * 4. Get the data from UserState with useSelector
 * ======================================================*/
export type BaseState<DataType> = {
  loading: boolean;
  error: string;
  data: DataType;
};

// 1. Create a UserState type with name (string) and email (string)
export type UserState = BaseState<{
  name: string;
  email: string;
}>

// 2. Create a ReduxState type and add the UserState
export type ReduxState = {
  user: UserState;
}


function exercise09() {
  // 3. Get 'loading' from UserState with mapStateToProps as 'loading'
  const mapStateToProps = (state: ReduxState) => ({
    loading: state.user.loading,
  });

  // 4. Get the 'email' from UserState with useSelector
  const email = useSelector((state: ReduxState) => state.user.data.email);






  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { mapStateToProps, email };
};

export default exercise09();

