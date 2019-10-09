/* 01
 * ======================================================
 * TODO:
 * 1. Replace propTypes with TypeScript
 * 2. Vervang de onClick met de onClick functie uit `types/index.ts`
 * Tip: Look into typing with React.FC<>
 * ======================================================*/
import React from 'react';
import * as i from 'types';
import styled, { css } from 'styled-components';

const Exercise07: React.FC<Exercise07Props> = ({ title, image = undefined, onClick }) => (
  <ContainerEl image={image}>
    <h1>{title}</h1>
    {onClick && (
      <button onClick={onClick}>
        Click me!
      </button>
    )}
  </ContainerEl>
);

type Exercise07Props = {
  title: string;
  image?: string;
  onClick?: i.OnClick<HTMLButtonElement>;
}

/* 02
 * ======================================================
 * TODO: Type this styled-component
 * ======================================================*/
const ContainerEl = styled.div<ContainerElProps>`
  width: 100%;
  height: 300px;

  ${({ image }) => image && css`
    background-image: url(${image});
  `};
`;

type ContainerElProps = {
  image?: string;
}

export default Exercise07;
