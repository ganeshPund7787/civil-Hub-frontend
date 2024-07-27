import { fetchFail, fetchStart, fetchSuccess } from "@/App/features/civilUser";
import {
  fetchFailClient,
  fetchStartClient,
  fetchSuccessClient,
} from "@/App/features/clientSlice";
import { useAppDispatch } from "@/App/store";
import useToast from "@/Hooks/useToast";
import { BACKEND_API_URL } from "@/main";
import { UserFormDataSignUp } from "@/pages/civilUser/SignUp";
import { UserFormData } from "@/pages/SignIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCivilApi = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoading, setisLoading] = useState(false);
  const notify = useToast();

  const SignUpCivilUser = async (formData: UserFormDataSignUp) => {
    setisLoading(true);
    const res = await fetch(`${BACKEND_API_URL}/api/auth/register`, {
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
  };

  const SignInUser = async (formData: UserFormData) => {
    dispatch(fetchStart());
    dispatch(fetchStartClient());
    const res = await fetch(`${BACKEND_API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success === false) {
      console.log(`Data success false`);
      dispatch(fetchFail());
      dispatch(fetchFailClient());
      notify("error", data.message);
      return;
    }

    notify("success", "User login successfully");
    console.log(`Notify`);
    if (data?.role === "engineer") {
      dispatch(fetchSuccess(data || null));
      navigate("/");
      return;
    }
    dispatch(fetchSuccessClient(data || null));
    navigate("/");
    return data;
  };

  return { SignUpCivilUser, SignInUser, isLoading };
};
