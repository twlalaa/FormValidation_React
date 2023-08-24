//Components

import Form from "./components/Form";

//Hooks

import { useState } from "react";

//Classes

const classes = {
  classX: "h-screen flex items-center justify-center",
  classY: "w-96",
  classZ: "text-2xl font-medium font-poppins text-center mb-5",
};

const App = () => {
  const [username, setUsername] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [email, setEmail] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [password, setPassword] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [repeatedPassword, setRepeated] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const submit = (username, email, password, repeatedPassword) => {
    if (!username) {
      setUsername({
        value: "",
        error: true,
        errorMessage: "Please fill out *username* field",
      });
    } else {
      setUsername({
        value: "",
        error: false,
        errorMessage: "",
      });
    }

    if (!email) {
      setEmail({
        value: "",
        error: true,
        errorMessage: "Please fill out *email* field",
      });
    } else if (email && !email.includes("@")) {
      setEmail({
        value: "",
        error: true,
        errorMessage: "Please make sure that is a valid email",
      });
    } else {
      setEmail({
        value: "",
        error: false,
        errorMessage: "",
      });
    }

    if (!password) {
      setPassword({
        value: "",
        error: true,
        errorMessage: "Please fill out *password* field",
      });
    } else if (password && password.length < 6) {
      setPassword({
        value: "",
        error: true,
        errorMessage: "Please make sure the password is min. 6 chars length",
      });
    } else {
      setPassword({
        value: "",
        error: false,
        errorMessage: "",
      });
    }

    if (!repeatedPassword) {
      setRepeated({
        value: "",
        error: true,
        errorMessage: "Please fill out *repeated password* field",
      });
    } else if (repeatedPassword && repeatedPassword !== password) {
      setRepeated({
        value: "",
        error: true,
        errorMessage: "Please make sure the passwords are the same",
      });
    } else {
      setRepeated({
        value: "",
        error: false,
        errorMessage: "",
      });
    }
  };

  return (
    <div className={classes.classX}>
      <div className={classes.classY}>
        <h1 className={classes.classZ}>Form Validation</h1>
        <Form
          password={password}
          email={email}
          username={username}
          repeatedPassword={repeatedPassword}
          submit={submit}
        />
      </div>
    </div>
  );
};

export default App;
