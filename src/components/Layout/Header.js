import { Fragment } from 'react';
import classes from './Header.module.css';

import MealPic from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={MealPic} alt='Header Pic' />
      </div>
    </Fragment>
  );
};

export default Header;
