import { IoIosLogOut } from "react-icons/io";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/App/store";
import { fetchFail, fetchStart, logOutuser } from "@/App/features/civilUser";
import { BACKEND_API_URL } from "@/main";
import useToast from "@/Hooks/useToast";

const LogOut = () => {
  const disptch = useAppDispatch();
  const toast = useToast();
  const logOutUser = async () => {
    try {
      disptch(fetchStart());
      const res = await fetch(`${BACKEND_API_URL}/api/auth/logout`);

      const data = await res.json();
      if (data.success === false) {
        disptch(fetchFail());
        toast("warning", data.message);
        return;
      }
      toast("success", data.message);
      disptch(logOutuser());
    } catch (error: any) {
      disptch(fetchFail());
    }
  };
  return (
    <Button className="flex items-center  text-red-600 ">
      <IoIosLogOut size={40} title="logout" onClick={logOutUser} />
    </Button>
  );
};

export default LogOut;
