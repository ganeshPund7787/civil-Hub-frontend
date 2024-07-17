import { useAppSelectore } from "@/App/store";
import { BACKEND_API_URL } from "@/main";

import {
  fetchStart,
  updateFail,
  updateSuccess,
} from "../../App/features/civilUser";
import { useDispatch } from "react-redux";
import useToast from "../useToast";
import { CivilUserType, EducationType, workExperienceType } from "@/types";

export type HeadUserType = {
  fullName?: string;
  photoUrl?: string;
  city?: string;
  state?: string;
  country?: string;
};

const useUpdateUser = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);
  const disptch = useDispatch();
  const toast = useToast();

  const update = async (formData: CivilUserType) => {
    try {
      disptch(fetchStart());
      const res = await fetch(
        `${BACKEND_API_URL}/api/user/update/${CurrentCivilUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success === false) {
        disptch(updateFail());
        toast("error", data.message);
        console.log("not ok", data);
        return;
      }
      toast("info", "Profle Updated!");
      console.log("User updated success", data);
      disptch(updateSuccess(data));
    } catch (error: any) {
      disptch(updateFail());
    }
  };

  const addLanAndEducation = async (
    formData: CivilUserType | EducationType
  ) => {
    try {
      console.log("FormData : --- : --- : ", formData);

      disptch(fetchStart());
      const res = await fetch(
        `${BACKEND_API_URL}/api/user/addLanAndEducation/${CurrentCivilUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success === false) {
        disptch(updateFail());
        toast("warning", data.message);
        console.log("not ok", data);
        return;
      }
      toast("success", "new changes success!");
      disptch(updateSuccess(data));
    } catch (error: any) {
      disptch(updateFail());
    }
  };

  const addSkillsAndWork = async (
    formData: CivilUserType | workExperienceType
  ) => {
    try {
      disptch(fetchStart());
      const res = await fetch(
        `${BACKEND_API_URL}/api/user/addSkillsAndWork/${CurrentCivilUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success === false) {
        disptch(updateFail());
        toast("warning", data.message);
        console.log("not ok", data);
        return;
      }
      toast("success", "new changes success!");
      disptch(updateSuccess(data));
    } catch (error: any) {
      disptch(updateFail());
    }
  };

  return { update, addLanAndEducation, addSkillsAndWork };
};

export default useUpdateUser;
