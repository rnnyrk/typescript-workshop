/*
 * ======================================================
 * Exercise 8
 * Extending prop types and typing hooks
 *
 * THIS DOES NOT NEED A TEST TO RUN
 * If you no longer see errors it should be good (if not sure, ask us!)
 * ======================================================*/



/*
 * ======================================================
 * TODO:
 * 1. Set the default value of 'SmallText' color to 'black'
 * 2. Extend the component's props type with 'RouteComponentProps'
 * 3. Set the types for 'useState' and 'openDishModal' using generics
 * 4. Set HTML type for 'useRef'
 * 5. Fix null error in 'useEffect'
 * ======================================================*/

import React, { useEffect, useState, useRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import bodyScrollLock from './bodyScrollLock';

/* FUN FACT
 * ======================================================
 * You can see the TypeScript definitions of packages by ALT/CMD + CLICK on
 * the properties coming from an external packacge. Try it on line 23.
 *
 * This is very useful to use as a sort of documentation and will help you find types that packages
 * provide themselves so you don't have to write certain types yourself (that may be incorrect).
 * An example is the 'RouteComponentProps' that react-router-dom provides for us.
 * ======================================================*/

// 2. Set the default value of SmallText color to black
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

// 1. Set the default value of 'SmallText' color to 'black'
const SmallText = styled.span<SmallTextProps>`
  font-size: 12px;
  color: ${(props) => props.theme.color[props.color]};
`;

type SmallTextProps = {
  color?: 'black' | 'prime';
}

// 2. Extend the 'Exercise08Props' type with RouteComponentProps
const Exercise08: React.FC<Exercise08Props> = ({ dishes, history }) => {
  // 3. Set the types for useState() and openDishModal() using generics
  const [currentDish, setCurrentDish] = useState();
  const [open, setOpen] = useState(false);

  // 4. Set HTML type for useRef() using generics
  const modalRef = useRef(null);

  // 5. Fix null error in useEffect()
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

type Exercise08Props = {
  dishes: DishProps[];
};

export default withRouter(Exercise08);


/* BONUS
 * ======================================================
 * Try and remove some of the explicitly written types on the hooks and see
 * if TypeScript is able to infer the correct type.
 * ======================================================*/
