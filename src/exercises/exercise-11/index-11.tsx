/*
 * ======================================================
 * Exercise 11
 * Typing Redux thunks
 *
 * TO RUN TEST
 * npm run test-11
 * ======================================================*/


/*
 * ======================================================
 * TODO:
 * 1. Add typing for the "first function" of 'getUser' and add this as generic to 'BaseThunkAction'.
 * HINT: Ignore the (dispatch, getState, api) part of this function.
 *
 * 2. Type 'getUser' with the 'GetUserAction' type.
 *
 * 3. Dispatch success function from userActions.
 * 4. Dispatch failed function from userActions.
 *
 * 5. BONUS: With generics, make it so 'api.get' knows what it will resolve.
 * ======================================================*/



 // Do not touch this
 const userActions = {
  getUser: () => action('user/GET'),
  getUserSuccess: (payload: UserData) => action('user/GET_SUCCESS', payload),
  getUserFailed: (error: string) => action('user/GET_FAILED', error),
};

// 1. Add typing for the "first function" of 'getUser' and add this as generic to 'BaseThunkAction'.
export type GetUserAction = BaseThunkAction<>;

// 2. Type 'getUser' with the 'GetUserAction' type
export const getUser = (id) => (dispatch, getState, api) => {
  // 5. BONUS: With generics, make it so 'api.get' knows what it will resolve
  return api.get({ path: `api/user/${id}` })
    .then((user) => {
      // 3. Dispatch success function from userActions
      return user;
    })
    .catch((err) => {
      // 4. Dispatch failed function from userActions
      return err;
    });
};

/* FUN FACT
 * ======================================================
 * With the BaseThunkAction, the "second function" of a thunk is always typed.
 * Once you have typed 'getUser', you can hover over the 3 parameters to see their types.
 *
 * For example, you can look into the entire state with 'getState().' and see all options of our
 * API Helper with 'api.'
 * ======================================================*/













/*
 * ======================================================
 * Do not touch this
 * ======================================================*/
import { ThunkAction as IThunkAction } from 'redux-thunk';
import { action } from 'typesafe-actions';
import { api } from './api';

type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

type ReduxState = {
  user: {};
}

// React components only care about the "first function" of a thunk
// Redux uses the "second function" of a thunk
// We created a helper type so that you will never have to type the "second function"
type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, ReduxState, typeof api, Action>;
type BaseThunkAction<Fn extends (...args: any) => any> = (...args: Parameters<Fn>) => ThunkAction<Promise<ReturnType<Fn>>>;

type UserData = {
  id: string;
  name: string;
}
