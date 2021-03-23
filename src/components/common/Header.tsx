import { Link } from "react-router-dom";
import logo from "../../logo.svg";

interface Props {
  authorized: boolean;
  handleClick: () => void;
  handleLogout: () => void;
  loading: boolean;
}

const Header = ({ authorized, handleClick, handleLogout, loading }: Props) => {
  return (
    <header className="header">
      <div className="title" onClick={handleClick}>
        <img className="logo" src={logo} alt="logo" />
        <h2>Sample App</h2>
      </div>
      <ul className="navigation">
        {authorized ? (
          <li>
            <Link to="/" onClick={handleLogout}>
              logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                onClick={(e) => {
                  if (loading) e.preventDefault();
                }}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                onClick={(e) => {
                  if (loading) e.preventDefault();
                }}
              >
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
