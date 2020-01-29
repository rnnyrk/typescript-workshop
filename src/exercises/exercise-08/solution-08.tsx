/*
 * ======================================================
 * TODO:
 * 1. Extend your own props with RouteComponentProps
 * 2. Set the default value of SmallText color to black
 * 3. Set the types for useState() and openDishModal()
 * 4. Set HTML type for useRef() and fix null error in useEffect()
 * ======================================================*/
import React, { useState, useRef, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import bodyScrollLock from './bodyScrollLock';

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
  color: ${({ theme, color }) => theme.colors[color || 'black']};
`;

type SmallTextProps = {
  color?: 'black' | 'prime';
}

const Exercise08: React.FC<Exercise08Props> = ({ dishes, history }) => {
  const [currentDish, setCurrentDish] = useState<DishProps>();
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      bodyScrollLock(modalRef.current);
    }
  }, [open]);

  const openDishModal = (dish: DishProps) => {
    setOpen(true);
    setCurrentDish(dish);
  };

  return (
    <>
      {open && currentDish && (
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

type Exercise08Props = RouteComponentProps & {
  dishes: DishProps[];
};

export default withRouter(Exercise08);
