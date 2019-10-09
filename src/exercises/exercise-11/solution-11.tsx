import { ThunkAction as IThunkAction } from 'redux-thunk';
import { action, ActionType } from 'typesafe-actions';

type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

// React components only care about the "first function" of a thunk
// Redux uses the "second function" of a thunk
// We created a helper type so that you will never have to type the "second function"
type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, ReduxState, {}, Action>;
type BaseThunkAction<Fn extends (...args: any) => any> = (...args: Parameters<Fn>) => ThunkAction<Promise<ReturnType<Fn>>>;

const userActions = {
  getUser: () => action('user/GET'),
  getUserSuccess: (payload: string) => action('user/GET_SUCCESS', payload),
  getUserFailed: (error: string) => action('user/GET_FAILED', error),
};

type ReduxState = {
  user: {};
}

/*
* ======================================================
* TODO: Above are some helper functions, you can try to
* understand how those work, or ignore and just use them
*
* 1. Type the "first function", with id parameter and
     return type on the BaseThunkAction helper
     (Tip: We've typed this function before)
  2. Dispatch the error and success functions
* ======================================================*/

type GetUserAction = BaseThunkAction<(id: string) => {} | string>;

export const getUser: GetUserAction = (id) => (dispatch, getState, api) => {
  return fetch(`api/user/${id}`)
    .then((res) => res.json())
    .then((user) => {
      dispatch(userActions.getUserSuccess(user));
      return user;
    })
    .catch((err) => {
      dispatch(userActions.getUserFailed(err));
      return err;
    });
};
