import { Redirect, Route, Switch } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import {
  RegisterPage,
  NotFound404,
  LoginPage,
  CharactersPage
} from "../../pages";

interface Props {
  authorized: boolean;
}

const Routes = ({ authorized }: Props) => {
  return (
    <Switch>
      <Route path="/not-found-404">
        <NotFound404 />
      </Route>

      <Route path="/login" exact>
        <LoginPage />
      </Route>

      <Route path="/register" exact>
        <RegisterPage />
      </Route>

      <ProtectedRoute path={"/characters/:id?"} isLoggedIn={authorized}>
        <CharactersPage />
      </ProtectedRoute>

      <Route path="/" exact>
        <Redirect to={authorized ? "characters" : "/login"} />
      </Route>

      <Route>
        <Redirect to="/not-found-404" />
      </Route>
    </Switch>
  );
};

export default Routes;
