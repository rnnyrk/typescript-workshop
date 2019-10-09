import { action, ActionType } from 'typesafe-actions';

export default () => {
  /*
  * ======================================================
  * TODO: This is a (somewhat) basic duck file
  * 1. Create a success action with typed parameters that passes payload
  * 2. Create a failed action that passes an error string
  * 3. Add user actions to ActionType (tip: Look into TypeScript typeof)
  * 4. Add the missing actions in the reducer
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

  const userActions = {
    getUser: () => action('user/GET'),
    getUserSuccess: () => { },
    getUserFailed: () => { },
  };

  const reducer = (state = initalState, action: ActionType<>) => {
    switch (action.type) {
      case 'user/GET':
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
};
