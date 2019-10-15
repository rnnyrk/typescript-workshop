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
 * 1. Create a 'UserState' type with 'name' and 'email' properties.
 * 2. Create a 'ReduxState' type and add the 'UserState' as 'user'.
 * 3. Get the data from 'UserState' with mapStateToProps as 'user'.
 * 4. Get the data from 'UserState' with useSelector.
 * ======================================================*/



export type BaseState<DataType> = {
  loading: boolean;
  error: string;
  data: DataType;
};

// 1. Create a UserState type with name (string) and email (string)
// Note: use BaseState
export type UserState = {}

// 2. Create a ReduxState type and add the UserState
export type ReduxState = {}


function exercise09() {
  // 3. Get 'loading' from UserState with mapStateToProps as 'loading'
  // Note: type the parameter correctly
  const mapStateToProps = () => ({});

  // 4. Get the email from UserState with useSelector
  // Note: type the parameter correctly
  const email = useSelector(() => {});












  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { mapStateToProps, email };
};

export default exercise09();







/* BONUS
 * ======================================================
 * Try to find a way (Google is allowed) to make it so you never have to type the callback function
 * of 'useSelector' with 'ReduxState' ever again.
 * ======================================================*/
