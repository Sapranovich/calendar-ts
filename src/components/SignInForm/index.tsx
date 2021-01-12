import React from "react";
import { Link } from "react-router-dom";
import validationSignIn from "../../services/validationSignIn";
import {
  IStateSignInForm,
  ISignInFormProps,
} from "../../typesQuestions/signInFormTypes";

const SignInForm = ({ handleToggleButtonClick }: ISignInFormProps) => {
  //возможно стоит перенести ошибки в redux хранилище
  const [stateForm, setStateForm] = React.useState<IStateSignInForm>({
    email: "",
    password: "",
    errors: {},
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateForm({
      ...stateForm,
      [event.target.name]: event.target.value,
      errors: {
        [event.target.name]: "",
      },
    });
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const user = {
      email: stateForm.email,
      password: stateForm.password,
    };
    const { isValid, errors } = validationSignIn(user);
    if (isValid) {
      console.log(user);
    } else {
      setStateForm({
        ...stateForm,
        errors,
      });
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmitForm}>
      <h2 className="sign-in-form__title">SignInForm</h2>

      <div className="sign-in-form__group">
        <input
          type="text"
          placeholder="Email"
          className="input sign-in-form__input"
          name="email"
          value={stateForm.email}
          onChange={handleInputChange}
        />
        {stateForm.errors.email && (
          <div className="error-feedback">{stateForm.errors.email}</div>
        )}
      </div>

      <div className="sign-in-form__group">
        <input
          type="password"
          placeholder="Password"
          className="input sign-in-form__input"
          name="password"
          value={stateForm.password}
          onChange={handleInputChange}
        />
        {stateForm.errors.password && (
          <div className="error-feedback">{stateForm.errors.password}</div>
        )}
      </div>

      <div className="sign-in-form__group">
        <button type="submit" className="button">
          Вход
        </button>
        <button onClick={handleToggleButtonClick}>перейти к SignUp</button>
        <Link to="/">
          <button> на главную</button>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
