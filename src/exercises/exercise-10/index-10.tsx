/*
 * ======================================================
 * Exercise 10
 * Typing Redux ducks
 *
 * TO RUN TEST
 * npm run test-10
 * ======================================================*/




import { action, ActionType } from 'typesafe-actions';

/*
* ======================================================
* TODO:
* 1. Update the actions with typed parameters that passes 'payload' and 'error'.
* 2. Add a return type to 'reducer' so it can never return anything else than 'UserState'.
* 3. Add user actions to 'ActionType' (tip: Look into TypeScript 'typeof').
* 4. Add the missing actions in the 'reducer'.
* ======================================================*/



export type BaseState<DataType> = {
  loading: boolean;
  error?: string;
  data: DataType;
};

export type UserState = BaseState<{
  name: string;
}>;

const initalState: UserState = {
  loading: false,
  error: undefined,
  data: {
    name: 'Sander',
  },
};

// 1. Update the missing actions with typed parameters
export const userActions = {
  getUser: () => action('user/GET'),

  // 'user/GET_SUCCESS' with payload + correct type
  getUserSuccess: () => {},

  // 'user/GET_FAILED' with error + correct type
  getUserFailed: () => {},
};

// 2. Add a return type to reducer so it can never return anything else than UserState
// 3. Add user actions to ActionType(tip: Look into TypeScript typeof)
export const reducer = (state = initalState, action: ActionType<>) => {
  switch (action.type) {
    case 'user/GET':
      return {
        ...state,
        loading: true,
      };
    // 4. Add the missing actions in the reducer
    default:
      return state;
  }
};
