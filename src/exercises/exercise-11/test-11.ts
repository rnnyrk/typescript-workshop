// Ignore this first part (helper functions)
import { ThunkAction as IThunkAction } from 'redux-thunk';
import { assert, IsExact } from "conditional-type-checks";
import { api } from './api';
import { GetUserAction, getUser } from './solution-11';

type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

type ReduxState = {
  user: {};
};

type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, ReduxState, typeof api, Action>;
type BaseThunkAction<Fn extends (...args: any) => any> = (...args: Parameters<Fn>) => ThunkAction<Promise<ReturnType<Fn>>>;

type UserData = {
  id: string;
  name: string;
};


// Check GetUserAction type
assert<IsExact<GetUserAction, Exercise11.GetUserAction>>(true);


// Check getUser type
type GetUserParams = Parameters<typeof getUser>[0];

// Check param type
assert<IsExact<GetUserParams, Exercise11.GetUserActionParam>>(true);

// Check function type
assert<IsExact<typeof getUser, Exercise11.GetUserThunkAction>>(true);








module Exercise11 {
  export type GetUserActionParam = string;

  export type GetUserAction = (id: GetUserActionParam) => IThunkAction<Promise<string>, ReduxState, typeof api, Action<any>>;

  export type GetUserThunkAction = BaseThunkAction<(id: GetUserActionParam) => string>;
}
