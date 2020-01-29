/*
 * ======================================================
 * Exercise 7
 * Replace propTypes and type CSS-in-JS
 *
 * TO RUN TEST
 * npm run test-7
 * ======================================================*/



/*
 * ======================================================
 * Don't touch this (do use it, though)
 * ======================================================*/
type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;



/* 01.
 * ======================================================
 * TODO:
 * 1. Replace propTypes with TypeScript
 * 2. Replace 'onClick' with the 'OnClick' type provided above
 *    and pass the correct HTMLElement type
 *
 * HINT: You can find the HTMLElement type by hovering over the <button> on line 40
 *
 * Tip: Look into typing for React.FC<>
 * ======================================================*/

import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components';

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



/* 02.
 * ======================================================
 * TODO:
 * - Type this styled-component
 *
 * Tip: Use a generic type
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
