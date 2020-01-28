/*
 * ======================================================
 * Exercise 6
 * Abstracting types
 *
 * TO RUN TEST
 * npm run test-6
 * ======================================================*/



/* 01.
 * ======================================================
 * TODO:
 * 1. Add the option for a "parameter" to 'BaseState'
 * 2. Pass 'UserState' and 'PostState' as "parameter" to 'BaseState'
 * 3. Use the passed "parameter" on 'BaseState' as a type for 'data' in 'BaseState'
 *
 * Tip: TypeScript generics
 * https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f
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


  /* Scroll down for the next exercise
   *
   *
   *
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { myFunction };
}



/* 02.
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
