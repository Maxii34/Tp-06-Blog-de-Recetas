import { Navigate, Outlet } from "react-router";

const Protector = ({ login }) => {
  if (!login?.usuario) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default Protector;
