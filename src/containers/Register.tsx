import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../components/home/RegisterForm";
import { RootState } from "../store";
import { clear, register } from "../store/auth/actions";

const selectRegisterProps = (state: RootState) => ({
  loading: state.auth.registerLoading,
  error: state.auth.registerErrorMessage
});

const Register = () => {
  const dispatch = useDispatch();
  const registerProps = useSelector(selectRegisterProps);

  useEffect(() => {
    return () => {
      dispatch(clear());
    };
  }, [dispatch]);

  const handleRegister = (formValues: RegisterFormValues) => {
    const { username, email, password } = formValues;
    dispatch(register(username, email, password));
  };

  return <RegisterForm handleRegister={handleRegister} {...registerProps} />;
};

export default Register;
