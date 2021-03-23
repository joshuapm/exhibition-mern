import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../components/common/Header";
import { RootState } from "../store";
import { logout } from "../store/auth/actions";
import { clearData } from "../store/user/actions";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const authorized = useSelector((state: RootState) => state.auth.authorized);
  const loading = useSelector(
    (state: RootState) => state.auth.loginLoading || state.auth.registerLoading
  );

  const history = useHistory();
  const handleClick = () => {
    if (!loading) {
      history.push("/");
    }
  };

  const handleLogout = () => {
    if (!loading) {
      dispatch(clearData());
      dispatch(logout());
      history.push("/");
    }
  };

  return (
    <Header
      authorized={authorized}
      handleClick={handleClick}
      handleLogout={handleLogout}
      loading={loading}
    />
  );
};

export default HeaderContainer;
