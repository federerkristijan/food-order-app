import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* spread operator enables all props values (type, id, etc.) to be added to input  */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
