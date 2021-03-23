import { useHistory } from "react-router";

const NotFound404 = () => {
  const history = useHistory();

  return (
    <div className="not-found">
      <h2>NOT FOUND</h2>
      <div className="nav-buttons-column">
        <button className="secondary-button" onClick={() => history.push("/")}>
          Go to HOME
        </button>
      </div>
    </div>
  );
};

export default NotFound404;
