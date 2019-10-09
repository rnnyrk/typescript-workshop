import { useSelector } from 'react-redux';

export default () => {
  /*
   * ======================================================
   * TODO:
   * 1. Create a UserState with name and email
   * 2. Create a ReduxState and add the UserState to it
   * 3. Map the data from UserState to mapStateToProps
   * 4. Map the data from UserState to useSelector
   *
   * Refer state to the ReduxState with 3 and 4
   * ======================================================*/
  type BaseState<DataType> = {
    loading: boolean;
    error: string;
    data: DataType;
  };

  type UserState = BaseState<{
    name: string;
    email: string;
  }>;

  type ReduxState = {
    user: UserState;
  };

  const mapStateToProps = (state: ReduxState) => ({
    name: state.user.data.name,
  });

  const name = useSelector((state: ReduxState) => state.user.data.name);
};
