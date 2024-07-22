import { useAppSelectore } from "@/App/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);

  return CurrentCivilUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default ProtectRoute;
