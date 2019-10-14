/*
 * ======================================================
 * Don't touch this
 * ======================================================*/
type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;



/* 01
 * ======================================================
 * TODO:
 * 1. Replace propTypes with TypeScript
 * 2. Replace 'onClick' with the 'OnClick' type provided above
 *
 * Tip: Look into typing for React.FC<>
 * ======================================================*/
import React from 'react';
import styled, { css } from '../../services/styled-components';

export const Exercise07: React.FC<Exercise07Props> = ({ title, image, onClick }) => (
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
  onClick?: OnClick<HTMLButtonElement>;
}

/* 02
 * ======================================================
 * TODO: Type this styled-component
 * ======================================================*/
export const ContainerEl = styled.div<ContainerElProps>`
  width: 100%;
  height: 300px;

  ${({ image }) => image && css`
    background-image: url(${image});
  `};
`;

type ContainerElProps = {
  image?: string;
}
