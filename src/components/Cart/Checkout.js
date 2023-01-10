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

    // assigning values to all keys
    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid
    })

    const fromIsValid = enteredNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalIsValid;

    if (!fromIsValid) {
      return;
    }


  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor="street">Your street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p> Please enter a street name!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && <p>Postal code must have min 5 characters!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor="city">Your city</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p> Please enter a city name!</p>}
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
