import { Redirect, Route } from "react-router";

interface Props {
  children: React.ReactNode;
  path: string | string[];
  isLoggedIn: boolean;
}

const ProtectedRoute: React.FC<Props> = ({
  children,
  path,
  isLoggedIn
}: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) => {
        return isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
