import { BACKEND_API_URL } from "@/main";
import { toast } from "react-toastify";

const useGetPost = () => {
  const GetAllPost = async () => {
    try {
      const res = await fetch(`${BACKEND_API_URL}/api/post/get`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        toast.error("Error while get post");
        return;
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(`Error while getApp Post frontend: `, error);
    }
  };
  return { GetAllPost };
};

export default useGetPost;
