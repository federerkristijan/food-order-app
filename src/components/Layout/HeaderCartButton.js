import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
  const [btnIsBump, setBtnIsBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  //  reduce method transforms an array of data into a single value
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
   }, 0);

  const btnClasses = `${classes.button} ${btnIsBump ? classes.bump : ''}`;

    useEffect(() => {
      if(items.length === 0) {
        return;
      }
      setBtnIsBump(true);

      // reseting the animation
      const timer = setTimeout(() => {
        setBtnIsBump(false);
      }, 300);

      // with a cleanup function
      return () => {
        clearTimeout((timer));
      };
   }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
