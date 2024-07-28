import useToast from "@/Hooks/useToast";
import { BACKEND_API_URL } from "@/main";
import { PostType } from "@/types";

type Props = {
  formData: PostType;
};

const useCreatePost = () => {
  const notify = useToast();
  const createPost = async (formData: Props) => {
    try {
      const res = await fetch(`${BACKEND_API_URL}/api/post/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData.formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error: any) {
      notify("error", error?.message);
      console.log(`Error while post frontend : `, error);
    }
  };
  return { createPost };
};

export default useCreatePost;
