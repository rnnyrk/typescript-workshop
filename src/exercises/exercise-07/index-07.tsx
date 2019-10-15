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
 * 2. Replace 'onClick' with the 'OnClick' type provided above.
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
