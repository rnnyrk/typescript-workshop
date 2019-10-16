/*
 * ======================================================
 * Exercise 7
 * Typing React and styled-components
 *
 * TO RUN TEST
 * npm run test-7
 * ======================================================*/



/*
 * ======================================================
 * Don't touch this (do use it, though)
 * ======================================================*/
type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;



/* 1.
 * ======================================================
 * TODO:
 * 1. Replace propTypes with TypeScript.
 * 2. Replace 'onClick' with the 'OnClick' type provided above and pass the correct HTMLElement type.
 * HINT: You can find the HTMLElement type by hovering over the <button> on line 37.
 *
 * Tip: Look into typing for React.FC<>.
 * ======================================================*/

import React from 'react';
import PT from 'prop-types';
import styled, { css } from '../../services/styled-components';

export const Exercise07 = ({ title, image, onClick }) => (
  <ContainerEl image={image}>
    <h1>{title}</h1>
    {onClick && (
      <button onClick={onClick}>
        Click me!
      </button>
    )}
  </ContainerEl>
);

Exercise07.propTypes = {
  title: PT.string.isRequired,
  image: PT.string,
  onClick: PT.func,
};



/* 2.
 * ======================================================
 * TODO:
 * - Type this styled-component.
 *
 * Tip: Use generics.
 * ======================================================*/

export const ContainerEl = styled.div`
  width: 100%;
  height: 300px;

  ${({ image }) => image && css`
    background-image: url(${image});
  `};
`;

ContainerEl.propTypes = {
  image: PT.string,
};

/* FUN FACTS
   * ======================================================
   * 1. We use an "augmented" version of styled-components that includes the type of our theme.
   *    You can ALT/CMD + CLICK on the styled-components import on line 31 to see how this is done.
   *
   * 2. When you write "props.theme" in the styled component above you will see all the properties in
   *    the theme. (if the options do not show automatically, you can show it with CTRL + SPACE)
   * ======================================================*/
