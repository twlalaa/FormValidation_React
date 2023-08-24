//Classes

const classes = {
  classX: "flex flex-col mb-2",
  classY: "mb-2",
  classZ:
    "border border-gray-600 rounded-lg placeholder:font-poppins px-2 py-1 text-sm placeholder:text-gray-500 focus:outline-none",
  classE: "mt-2 text-sm text-red-500",
};

const FormGroup = (props) => {
  return (
    <div className={classes.classX}>
      <label htmlFor={props.id} className={classes.classY}>
        {props.label}
      </label>
      <input
        ref={props.reference}
        type={props.type}
        id={props.id}
        className={`${classes.classZ} ${props.error ? "border-red-500" : ""}`}
        placeholder={props.ph}
      />
      {props.error && <p className={classes.classE}>{props.errorMessage}</p>}
    </div>
  );
};

export default FormGroup;
