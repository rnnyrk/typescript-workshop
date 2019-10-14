import React from 'react';
import { assert, IsExact, IsAny } from "conditional-type-checks";
import { Exercise07, ContainerEl } from './index-07';
import { StyledComponent } from 'styled-components';

type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

// 1.
// Check props
type Props01 = Parameters<typeof Exercise07>[0];
assert<IsExact<Props01, Test07.Exercise01.Props>>(true);

// Check type of component
assert<IsExact<typeof Exercise07, Test07.Exercise01.ComponentType>>(true);


// 2.
// Check type of component
assert<IsExact<typeof ContainerEl, Test07.Exercise02.ComponentType>>(true);






module Test07 {
  export module Exercise01 {
    export type Props = {
      title: string;
      image?: string;
      onClick?: OnClick<HTMLButtonElement>;
    };

    export type ComponentType = React.FunctionComponent<Props>;
  }

  export module Exercise02 {
    export type Props = {
      image?: string;
    };

    export type ComponentType = StyledComponent<'div', any, Props, never>;
  }
}
