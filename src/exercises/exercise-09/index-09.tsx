import { useSelector } from 'react-redux';

export default () => {
  /*
   * ======================================================
   * TODO:
   * 1. Create a UserState type with name and email
   * 2. Create a ReduxState type and add the UserState
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

  // ..

  const mapStateToProps = (state) => ({
    name: state,
  });

  const name = useSelector((state) => state);
};
