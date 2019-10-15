const userActions = {
  getUser: () => action('user/GET'),
  getUserSuccess: (payload: UserData) => action('user/GET_SUCCESS', payload),
  getUserFailed: (error: string) => action('user/GET_FAILED', error),
};

export type GetUserAction = BaseThunkAction<(id: string) => string>;

export const getUser: GetUserAction = (id) => (dispatch, getState, api) => {
  return api.get<UserData>({ path: `api/user/${id}` })
    .then((user) => {
      dispatch(userActions.getUserSuccess(user));
      return user;
    })
    .catch((err) => {
      dispatch(userActions.getUserFailed(err));
      return err;
    });
};








// Ignore this first part (helper functions)
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
