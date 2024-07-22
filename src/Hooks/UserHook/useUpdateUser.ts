import { BACKEND_API_URL } from "@/main";

import {
  fetchStart,
  updateFail,
  updateSuccess,
} from "../../App/features/civilUser";
import { useDispatch } from "react-redux";
import useToast from "../useToast";
import {
  CivilUserType,
  EducationType,
  ProjectsType,
  workExperienceType,
} from "@/types";
import { UserSkillFormData } from "@/components/civilUser/AddSkills";

export type HeadUserType = {
  fullName?: string;
  photoUrl?: string;
  city?: string;
  state?: string;
  country?: string;
};

const useUpdateUser = () => {
  const disptch = useDispatch();
  const toast = useToast();

  const update = async (formData: CivilUserType) => {
    try {
      disptch(fetchStart());
      const res = await fetch(`${BACKEND_API_URL}/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

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
      disptch(fetchStart());
      const res = await fetch(
        `${BACKEND_API_URL}/api/user/addLanAndEducation`,
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

  const UpdateOther = async (
    formData:
      | CivilUserType
      | ProjectsType
      | workExperienceType
      | UserSkillFormData
      | string,
    API_ROOT: string
  ) => {
    try {
      disptch(fetchStart());

      const res = await fetch(`${BACKEND_API_URL}/api/user/${API_ROOT}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        disptch(updateFail());
        toast("error", data.message);
        console.log("not ok", data);
        return;
      }
      toast("success", "new changes success!");
      disptch(updateSuccess(data));
    } catch (error) {
      disptch(updateFail());
      console.log(`Erorr while Update Other`, error);
    }
  };

  return { update, addLanAndEducation, UpdateOther };
};

export default useUpdateUser;
