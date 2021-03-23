import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { clear, login } from "../store/auth/actions";
import LoginForm from "../components/home/LoginForm";
import { useHistory } from "react-router";

const selectLoginProps = (state: RootState) => ({
  loading: state.auth.loginLoading,
  error: state.auth.loginErrorMessage,
  authorized: state.auth.authorized
});

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginProps = useSelector(selectLoginProps);

  const handleLogin = (formValues: LoginFormValues) => {
    const { username, password } = formValues;
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (loginProps.authorized) {
      history.push("/");
    }
  }, [history, loginProps.authorized]);

  useEffect(() => {
    return () => {
      dispatch(clear());
    };
  }, [dispatch]);

  return <LoginForm {...loginProps} handleLogin={handleLogin} />;
};

export default Login;
