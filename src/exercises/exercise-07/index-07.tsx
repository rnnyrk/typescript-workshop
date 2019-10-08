/*
 * ======================================================
 * TODO:
 * 1. Extend your own props with RouteComponentProps
 * 2. Set the default value of SmallText color to black
 * 3. Set the types for useState() and openDishModal()
 * 4. Set HTML type for useRef() and fix null error in useEffect()
 * ======================================================*/
import React, { useEffect, useState, useRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import bodyScrollLock from 'services/bodyScrollLock';

const Modal = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
`;

const List = styled.div`
  width: 100%;
  display: flex;
`;

const ListItem = styled.span`
  font-size: 16px;
`;

const SmallText = styled.span<SmallTextProps>`
  font-size: 12px;
  color: ${({ theme, color }) => theme.colors[color]};
`;

type SmallTextProps = {
  color?: 'black' | 'prime';
}

const Exercise07: React.FC<Exercise07Props> = ({ dishes, history }) => {
  const [currentDish, setCurrentDish] = useState();
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    bodyScrollLock(modalRef.current);
  }, [open]);

  const openDishModal = (dish) => {
    setOpen(true);
    setCurrentDish(dish);
  };

  return (
    <>
      {open && (
        <Modal ref={modalRef}>
          <h2>{currentDish.title}</h2>
          <button onClick={() => history.push(currentDish.slug)}>
            Create recipe for this dish
          </button>
        </Modal>
      )}
      <List>
        {dishes.map((dish) => (
          <ListItem onClick={() => openDishModal(dish)}>
            {dish.title}
          </ListItem>
        ))}
      </List>
      <SmallText>Select your favorite dish to create a recipe</SmallText>
    </>
  );
};

type DishProps = {
  slug: string;
  title: string;
};

type Exercise07Props = {
  dishes: DishProps[];
};

export default withRouter(Exercise07);
