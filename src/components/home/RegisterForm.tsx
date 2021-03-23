import React, { ChangeEvent, useState } from "react";
import Alert from "../common/Alert";

declare interface Props {
  handleRegister: Function;
  loading: boolean;
  error: string;
}

const initialValues = {
  email: "",
  username: "",
  password: ""
};

const RegisterForm = ({ handleRegister, loading, error }: Props) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let propName: string = e.target.name;
    let value: string = e.target.value;

    setFormValues({ ...formValues, [propName]: value });
  };
  return (
    <>
      <Alert display={!!error} message={error} />

      <div>
        <form
          className={loading ? "loading form-container" : "form-container"}
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formValues);
          }}
        >
          <div className="form-control">
            <label htmlFor="username">Email:</label>
            <input
              disabled={loading}
              type="text"
              id="email"
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="username">Username:</label>
            <input
              disabled={loading}
              type="text"
              id="username"
              name="username"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input
              disabled={loading}
              type="password"
              id="password"
              name="password"
              onChange={handleOnChange}
            />
          </div>

          <div className="form-control ">
            <button disabled={loading} className="primary-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
