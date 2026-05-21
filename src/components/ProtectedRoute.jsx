import {
  Navigate,
  useLocation,
} from "react-router-dom";

import {
  auth,
} from "../firebase";

const ProtectedRoute = ({
  children,
}) => {

  const location =
    useLocation();

  const user =
    auth.currentUser;

  if (!user) {

    return (
      <Navigate
        to="/auth"
        state={{
          from:
            location,
        }}
        replace
      />
    );

  }

  return children;

};

export default ProtectedRoute;