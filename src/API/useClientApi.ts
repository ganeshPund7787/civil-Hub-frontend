import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "@/Hooks/useToast";
import { BACKEND_API_URL } from "@/main";
import { ClientType } from "@/types";

export type Props = {
  formData: ClientType;
};

export const useClientApi = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const notify = useToast();

  const SignUpClient = async ({ formData }: Props) => {
    console.log("Form Data: ", formData);
    try {
      setisLoading(true);
      const res = await fetch(`${BACKEND_API_URL}/api/client/register`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      setisLoading(false);
      if (!data.success) {
        notify("error", data.message);
        return;
      }
      notify("success", data.message);
      navigate("/sign-in");
      return data;
    } catch (error: any) {
      notify("error", error.message);
      console.log(`Error while Sign Up : `, error);
    }
  };

  return { SignUpClient, isLoading };
};
