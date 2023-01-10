import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = value => value.trim().length === 0 || value.trim() === '';
const isNotMin = value => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity ,setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventdefault();

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostal = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isEmpty(enteredPostal);
    const enteredCityIsValid = !isNotMin(enteredCity);

    const fromIsValid = enteredNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalIsValid;



    if (!fromIsValid) {
      return;
    }


  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Your street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">Your city</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.action}>
        {/* type="button doesn't submit the form!" */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
