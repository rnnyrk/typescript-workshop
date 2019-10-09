import { action, ActionType } from 'typesafe-actions';

export default () => {
  /*
  * ======================================================
  * TODO: This is a (somewhat) our basic duck file
  *
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
    getUserSuccess: (payload: string) => action('user/GET_SUCCESS', payload),
    getUserFailed: (error: string) => action('user/GET_FAILED', error),
  };

  const reducer = (state = initalState, action: ActionType<typeof userActions>) => {
    switch (action.type) {
      case 'user/GET':
        return {
          ...state,
          loading: true,
        };
      case 'user/GET_SUCCESS':
        return {
          ...state,
          loading: false,
          data: {
            name: action.payload,
          },
        };
      case 'user/GET_FAILED':
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: initalState.data,
        };
      default:
        return state;
    }
  };
};
