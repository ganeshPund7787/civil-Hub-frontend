import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "info" | "warning" | "default";

const useToast = () => {
  const notify = (type: ToastType, message: string) => {
    const commonOptions: ToastOptions = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    switch (type) {
      case "success":
        toast.success(message, {
          ...commonOptions,
          style: { backgroundColor: "green", color: "white" },
        });
        break;
      case "error":
        toast.error(message, {
          ...commonOptions,
          style: { backgroundColor: "red", color: "white" },
        });
        break;
      case "info":
        toast.info(message, {
          ...commonOptions,
          style: { backgroundColor: "blue", color: "white" },
        });
        break;
      case "warning":
        toast.warn(message, {
          ...commonOptions,
          style: { backgroundColor: "orange", color: "black" },
        });
        break;
      default:
        toast(message, commonOptions);
    }
  };

  return notify;
};

export default useToast;
