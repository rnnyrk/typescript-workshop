import { action, ActionType } from 'typesafe-actions';

export type BaseState<DataType> = {
  loading: boolean;
  error?: string;
  data: DataType;
}

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

export const userActions = {
  getUser: () => action('user/GET'),
  getUserSuccess: (payload: string) => action('user/GET_SUCCESS', payload),
  getUserFailed: (error: string) => action('user/GET_FAILED', error),
};

export const reducer = (state = initalState, action: ActionType<typeof userActions>): UserState => {
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
