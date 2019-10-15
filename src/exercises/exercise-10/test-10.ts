import { assert, IsExact } from "conditional-type-checks";
import { BaseState, UserState, userActions, reducer } from './index-10';

// Check if base state is untouched
assert<IsExact<BaseState<{}>, Exercise10.BaseState<{}>>>(true);

assert<IsExact<UserState, Exercise10.UserState>>(true);

// Check actions
const {getUserSuccess, getUserFailed} = userActions;

// Check params
type GetUserSuccessParam = Parameters<typeof getUserSuccess>[0];
assert<IsExact<GetUserSuccessParam, Exercise10.GetUserSuccessParam>>(true);

type GetUserFailedParam = Parameters<typeof getUserFailed>[0];
assert<IsExact<GetUserFailedParam, Exercise10.GetUserFailedParam>>(true);

// Check function type
assert<IsExact<typeof getUserSuccess, Exercise10.GetUserSuccess>>(true);
assert<IsExact<typeof getUserFailed, Exercise10.GetUserFailed>>(true);

// Check reducer action parameter
type ReducerActionParameterType = Parameters<typeof reducer>[1];
assert<IsExact<ReducerActionParameterType, Exercise10.ReducerActionParameterType>>(true);










module Exercise10 {
  export type BaseState<DataType> = {
    loading: boolean;
    error?: string;
    data: DataType;
  };

  export type UserState = BaseState<{
    name: string;
  }>;

  export type GetUserSuccessParam = string;
  export type GetUserFailedParam = string;

  type GetUserAction = {
    type: "user/GET";
  };

  type GetUserSuccessAction = {
    type: "user/GET_SUCCESS";
    payload: string;
  };

  export type GetUserSuccess = (payload: string) => GetUserSuccessAction;

  type GetUserFailedAction = {
    type: "user/GET_FAILED";
    payload: string;
  };
  export type GetUserFailed = (error: string) => GetUserFailedAction;

  export type ReducerActionParameterType =
    | GetUserAction
    | GetUserFailedAction
    | GetUserSuccessAction;
}
