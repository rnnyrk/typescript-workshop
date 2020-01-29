import { assert, IsExact } from "conditional-type-checks";
import {exercise0601,exercise0602,BaseState,PostState,UserState,RouterProps, ComponentProps} from './index-06';

// 1.
// Check if generic
assert<IsExact<BaseState<{}>, Test06.exercise01.BaseState<{}>>>(true);

// Check if generics are correctly passed
assert<IsExact<BaseState<number>, Test06.exercise01.BaseState<number>>>(true);


// 2.
// Check UserState type
assert<IsExact<UserState, Test06.exercise01.UserState>>(true);

// Check PostState type
assert<IsExact<PostState, Test06.exercise01.PostState>>(true);


// 3.
// Check param types
const {myFunction} = exercise0601();
type MyFunctionParams = Parameters<typeof myFunction>;
type MyFunctionUserParam = MyFunctionParams[0];
type MyFunctionPostParam = MyFunctionParams[1];

assert<IsExact<MyFunctionUserParam, Test06.exercise01.UserState>>(true);
assert<IsExact<MyFunctionPostParam, Test06.exercise01.PostState>>(true);

// Check return type
type MyFunctionReturnType = ReturnType<typeof myFunction>;

assert<IsExact<MyFunctionReturnType, Test06.exercise01.MyFunctionReturnType>>(true);


// 4.
// Check if routerprops is untouched
assert<IsExact<RouterProps, Test06.exercise02.RouterProps>>(true);

// Check if componentprops is extended with routerprops
assert<IsExact<ComponentProps, Test06.exercise02.ComponentProps>>(true);

// Check if navigateTo param type is correct
const {navigateTo} = exercise0602();
type NavigateToParams = Parameters<typeof navigateTo>;
type NavigateToPropsParam = NavigateToParams[0];

assert<IsExact<NavigateToPropsParam, Test06.exercise02.NavigateToPropsParam>>(true);















module Test06 {
  export module exercise01 {
    export type BaseState<DataType> = {
      loading: boolean;
      error: string;
      data: DataType;
    };

    export type UserState = BaseState<{
      name: string;
      age: number;
    }>;

    export type PostState = BaseState<{
      title: string;
      content: string;
    }>;

    export type MyFunctionParams = [UserState, PostState];

    export type MyFunctionReturnType = string | void;
  };


  export module exercise02 {
    export type RouterProps = {
      history: {
        push: (route: string) => void;
      };
      match: {
        id: string;
      };
    };

    export type ComponentProps = RouterProps & {
      title: string;
    };

    export type NavigateToPropsParam = ComponentProps;
  }
}
