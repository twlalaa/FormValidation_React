//Components

import FormGroup from "./FormGroup";

//Hooks

import { useRef } from "react";

//Classes
const classes = {
  classX: "flex flex-col border-2 rounded-lg p-5",
  classY: "bg-green-500 text-white p-2 rounded mt-2",
};

const Form = (props) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatedPasswordRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.submit(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      repeatedPasswordRef.current.value
    );
  };
  return (
    <form onSubmit={submitFormHandler} className={classes.classX}>
      <FormGroup
        label="Username"
        ph="Enter your username"
        errorMessage={props.username.errorMessage}
        type="text"
        id="username"
        reference={usernameRef}
        error={props.username.error}
      />
      <FormGroup
        label="Email"
        ph="Enter your email"
        errorMessage={props.email.errorMessage}
        type="text"
        id="email"
        reference={emailRef}
        error={props.email.error}
      />
      <FormGroup
        label="Password"
        ph="Enter your password"
        errorMessage={props.password.errorMessage}
        type="text"
        id="password"
        reference={passwordRef}
        error={props.password.error}
      />
      <FormGroup
        label="Repeated password"
        ph="Enter your password again"
        errorMessage={props.repeatedPassword.errorMessage}
        type="text"
        id="repeatedPassword"
        reference={repeatedPasswordRef}
        error={props.repeatedPassword.error}
      />
      <button className={classes.classY}>Submit</button>
    </form>
  );
};

export default Form;
