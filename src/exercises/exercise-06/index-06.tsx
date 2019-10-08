/* 01
 * ======================================================
 * TODO:
 * 1. Replace propTypes with TypeScript
 * 2. Vervang de onClick met de onClick functie uit `types/index.ts`
 * Tip: Look into typing with React.FC<>
 * ======================================================*/
import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components';

const Exercise06 = ({ title, image, onClick }) => (
  <ContainerEl image={image}>
    <h1>{title}</h1>
    {onClick && (
      <button onClick={onClick}>
        Click me!
      </button>
    )}
  </ContainerEl>
);

Exercise06.propTypes = {
  title: PT.string.isRequired,
  image: PT.string,
  onClick: PT.func,
};

/* 02
 * ======================================================
 * TODO: .... @TODO
 * ======================================================*/
const ContainerEl = styled.div`
  width: 100%;
  height: 300px;

  ${({ image }) => image && css`
    background-image: url(${image});
  `};
`;

ContainerEl.propTypes = {
  image: PT.string,
};

export default Exercise06;
