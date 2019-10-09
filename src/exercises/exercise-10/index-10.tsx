import { action, ActionType } from 'typesafe-actions';

export default () => {
  /*
  * ======================================================
  * TODO: This is a (somewhat) our basic duck file
  *
  * 1. Update the actions with typed parameters that passes payload / error
  * 2. Add user actions to ActionType (tip: Look into TypeScript typeof)
  * 3. Add the missing actions in the reducer
  * ======================================================*/
  type BaseState<DataType> = {
    loading: boolean;
    error?: string;
    data: DataType;
  }

  type UserState = BaseState<{
    name: string;
  }>;

  const initalState: UserState = {
    loading: false,
    error: undefined,
    data: {
      name: 'Sander',
    },
  };

  // 1. Update the actions with typed parameters that passes payload / error
  const userActions = {
    getUser: () => action('user/GET'),
    getUserSuccess: () => { },
    getUserFailed: () => { },
  };

  // 2. Add user actions to ActionType(tip: Look into TypeScript typeof)
  const reducer = (state = initalState, action: ActionType<>) => {
    switch (action.type) {
      case 'user/GET':
        return {
          ...state,
          loading: true,
        };
      // 3. Add the missing actions in the reducer
      default:
        return state;
    }
  };
};
