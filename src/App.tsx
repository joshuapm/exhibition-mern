import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import Routes from "./components/common/Routes";
import { RootState } from "./store";
import "./App.css";

function App() {
  const authorized = useSelector((state: RootState) => state.auth.authorized);

  return (
    <Router>
      <div className="page">
        <HeaderContainer />
        <main className="content">
          <Routes authorized={authorized} />
        </main>

        <footer className="footer">
          <p>Sample app by Joshua PM</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
