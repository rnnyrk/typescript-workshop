/*
 * ======================================================
 * Exercise 6
 * Adding generics to types
 *
 * TO RUN TEST
 * npm run test-6
 * ======================================================*/



/* 1.
 * ======================================================
 * This is an example from our Redux setup
 *
 * TODO:
 * 1. Add the possibility of a "parameter" to 'BaseState'.
 * 2. Pass 'UserState' and 'PostState' as parameter to 'BaseState'.
 * 3. Use the "parameter" type as type for 'data' in 'BaseState'.
 *
 * Tip: Look into TypeScript generics.
 * ======================================================*/

export type BaseState = {
  loading: boolean;
  error: string;
  data: {};
};

export type UserState = {
  name: string;
  age: number;
};

export type PostState = {
  title: string;
  content: string;
};

export function exercise0601() {
  // Don't change the function
  const myFunction = (user: UserState, post: PostState): string | void => {
    if (!user.loading) {
      return user.data.name;
    }

    if (!post.loading) {
      return post.data.title;
    }
  };





  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { myFunction };
}



/* 2.
 * ======================================================
 * TODO:
 * - Extend 'ComponentProps' with 'RouterProps'.
 * ======================================================*/

export type RouterProps = {
  history: {
    push: (route: string) => void;
  };
  match: {
    id: string;
  };
}

export type ComponentProps = {
  title: string;
}

export function exercise0602() {
  // Don't change the function
  const extendFunction = (props: ComponentProps) => {
    props.history.push(props.match.id);
  };






  /*
  * ======================================================
  * Do not touch this
  * ======================================================*/
 return { extendFunction };
};
