import {
  fetchFailClient,
  fetchStartClient,
  updateSuccessClient,
} from "@/App/features/clientSlice";
import { useAppDispatch } from "@/App/store";
import { BACKEND_API_URL } from "@/main";
import { ClientType } from "@/types";
import useToast from "../useToast";

type Props = {
  formData: ClientType;
};

const useUpdateClient = () => {
  const dispatch = useAppDispatch();
  const notify = useToast();
  const updateClient = async ({ formData }: Props) => {
    try {
      dispatch(fetchStartClient());
      const res = await fetch(`${BACKEND_API_URL}/api/client/update-client`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(fetchFailClient());
        notify("error", data.message);
        return;
      }
      dispatch(updateSuccessClient(data));
      notify("success", "Client update success");
    } catch (error) {
      console.log(`Error while Update client : `, error);
    }
  };
  return { updateClient };
};

export default useUpdateClient;
