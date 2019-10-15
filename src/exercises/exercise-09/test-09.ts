import { assert, IsExact, IsAny } from "conditional-type-checks";
import exercise09, {BaseState,ReduxState,UserState} from './index-09';


// 1.
// Check if basestate is untouched
assert<IsExact<BaseState<{}>, Test09.BaseState<{}>>>(true);

// Check userstate type
assert<IsExact<UserState, Test09.UserState>>(true);

// Check reduxstate
assert<IsExact<ReduxState, Test09.ReduxState>>(true);

// check mapstatetoprops
const {mapStateToProps,email} = exercise09;
assert<IsExact<typeof mapStateToProps, Test09.MapStateToProps>>(true);

// check user type
assert<IsExact<typeof email, Test09.EmailFromSelector>>(true);



module Test09 {
  export type BaseState<DataType> = {
    loading: boolean;
    error: string;
    data: DataType;
  };

  export type UserState = BaseState<{
    name: string;
    email: string;
  }>;

  export type ReduxState = {
    user: UserState;
  };

  export type MapStateToProps = (state: ReduxState) => {
    loading: boolean;
  };

  export type EmailFromSelector = string;
}
