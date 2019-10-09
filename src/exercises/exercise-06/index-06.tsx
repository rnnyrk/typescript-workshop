export default () => {
  /* 01
   * ======================================================
   * TODO: This is an example from our Redux setup
   * 1. Pass UserState and PostState and as parameter to BaseState
   * 2. Overwrite data inside BaseState with the passed state
   * Tip: Look into TypeScript generics
   * ======================================================*/
  type BaseState = {
    loading: boolean;
    error: string;
    data: {};
  };

  type UserState = {
    name: string;
    age: number;
  }

  type PostState = {
    title: string;
    content: string;
  }

  /* 02
  * ======================================================
  * TODO: Extend ComponentProps with RouterProps
  * ======================================================*/
  type RouterProps = {
    history: {
      push: () => void;
    };
    match: {
      id: string;
    };
  }

  type ComponentProps = {
    title: string;
  }
};
