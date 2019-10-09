export default () => {
  /*
   * ======================================================
   * TODO: This is an example from our Redux setup
   *
   * 1. Pass UserState and PostState and as parameter to BaseState
   * 2. Overwrite data inside BaseState with the passed state
   * Tip: Look into TypeScript generics
   * ======================================================*/

  type BaseState<DataType> = {
    loading: boolean;
    error: string;
    data: DataType;
  };

  type UserState = BaseState<{
    name: string;
    age: number;
  }>;

  type PostState = BaseState<{
    title: string;
    content: string;
  }>;
};
