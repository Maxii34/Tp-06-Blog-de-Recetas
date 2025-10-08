import { Navigate, Outlet } from "react-router";

const Protector = ({ login }) => {
  if (!login) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default Protector;
