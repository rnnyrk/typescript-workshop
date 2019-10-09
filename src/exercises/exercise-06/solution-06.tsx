export default () => {
  /* 01
   * ======================================================
   * TODO: This is an example from our Redux setup
   *
   * 1. Pass UserState and PostState as parameter to BaseState
   * 2. Overwrite data inside BaseState with the passed state
   *
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

  // Don't change the function
  const myFunction = (user: UserState, post: PostState) => {
    if (!user.loading) {
      return user.data.name;
    }

    if (!post.loading) {
      return post.data.title;
    }
  };

  /* 02
  * ======================================================
  * TODO: Extend ComponentProps with RouterProps
  * ======================================================*/
  type RouterProps = {
    history: {
      push: (route: string) => void;
    };
    match: {
      id: string;
    };
  }

  type ComponentProps = RouterProps & {
    title: string;
  }

  // Don't change the function
  const extendFunction = (props: ComponentProps) => {
    props.history.push(props.match.id);
  };
};
