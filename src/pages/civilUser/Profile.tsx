import { useAppSelectore } from "@/App/store";
import { SlLocationPin } from "react-icons/sl";
import EditLanguage from "@/components/civilUser/EditLanguage";
import AddLanguage from "@/components/civilUser/AddLanguage";
import AddEducation from "@/components/civilUser/AddEducation";
import AddSkills from "@/components/civilUser/AddSkills";
import AddWorkExperiance from "@/components/civilUser/AddWorkExperiance";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import SkillsCarousel from "@/components/civilUser/SkillsCarousel";
import AddProject from "@/components/civilUser/AddProject";

const Profile = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);
  console.log("Experiance", CurrentCivilUser.workExperience.length);
  return (
    <div className="flex flex-col min-h-full md:p-5">
      <div className="flex justify-between items-center min-h-full rounded-t-[1rem] max-w-full p-5 border-b-2 border-slate-500">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="avatar">
            {/* online */}
            <div className="w-24 h-24 rounded-full">
              <img src={CurrentCivilUser.photoUrl} className="h-40 w-40" />
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-semibold">
              {CurrentCivilUser.fullName}
            </h1>
            <p className="mt-2 flex gap-1 items-center text-sm lowercase">
              <SlLocationPin /> {CurrentCivilUser.city},{" "}
              {CurrentCivilUser.state}, {CurrentCivilUser.country}
            </p>
          </div>
        </div>
        <IoAdd
          className="border relative right-0 p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
          size={40}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mt-5 md:w-[30%]">
          <div className="flex items-center p-6">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-2xl font-semibold tracking-wide">
                Languages
              </h1>
              <p className="flex items-center">
                <AddLanguage />
                <EditLanguage />
              </p>
            </div>
            {CurrentCivilUser.languages &&
              CurrentCivilUser?.languages?.map((language: string) => (
                <span>{language}</span>
              ))}
          </div>

          <div className="flex items-center p-6">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-2xl font-semibold tracking-wide">
                Education
              </h1>
              <p className="flex gap-4 items-center">
                <AddEducation />
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 md:border-l-2 md:border-t-0 border-slate-500 w-full md:w-[70%]">
          {" "}
          <div className="">
            <div className="flex justify-between p-6">
              <h1 className="font-semibold text-2xl">Skills</h1>
              <AddSkills />
            </div>
            <div className="">
              {CurrentCivilUser.skills.length > 0 &&
                CurrentCivilUser?.skills?.map((skill: string) => (
                  <div className="">{skill}</div>
                ))}
            </div>
            <hr className="text-slate-600" />
          </div>
          <div className="">
            <div className="flex justify-between p-6">
              <h1 className="font-semibold text-2xl">Work experiance</h1>
              <AddWorkExperiance />
            </div>
            <div className="">
              {CurrentCivilUser.workExperience &&
                CurrentCivilUser.workExperience}
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 flex-col min-h-full md:p-5">
        <div className="border-2 border-slate-500 rounded md:rounded-[1rem]">
          <div className="flex items-center justify-between p-5">
            <h1 className="text-2xl font-semibold">Certifications</h1>
            <Button>
              <IoAdd
                className="border p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
                size={40}
              />
            </Button>
          </div>
          <hr className="text-slate-500" />
          <div className="flex items-center justify-center">
            {CurrentCivilUser?.certifications.length > 0 ? (
              <SkillsCarousel ImgArr={CurrentCivilUser?.certifications || []} />
            ) : (
              <div className="flex flex-col py-10 items-center justify-center">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/trophy-6437812-5307748.png?f=webp"
                  alt=""
                  className="h-52 w-52 mt-5"
                />
                <p className="text-wrap text-sm px-5 md:p-0">
                  Listing your certifications can help prove your specific
                  knowledge or abilities.(+10%) <br /> You can add them manually
                  or import them from Credly.{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex mt-5 flex-col min-h-full md:p-5">
        <div className="border-2 border-slate-500 rounded md:rounded-[1rem]">
          <div className="flex items-center justify-between p-5">
            <h1 className="text-2xl font-semibold">My Projects </h1>
            <Button>
              <IoAdd
                className="border p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
                size={40}
              />
            </Button>
          </div>
          <hr className="text-slate-500" />
          <div className="">
            <AddProject />
          </div>
          <hr className="text-slate-500" />
          <div className="">
            {CurrentCivilUser?.projects?.length > 0 &&
              CurrentCivilUser?.projects?.map((project: any) => (
                <span>{project}</span>
              ))}
          </div>
        </div>
      </div>

      <div className="flex mt-5 flex-col min-h-full md:p-5">
        <div className="border-2 border-slate-500 rounded md:rounded-[1rem]">
          <div className="flex items-center justify-between p-5">
            <h1 className="text-2xl font-semibold">Activity </h1>
            <Button>
              <IoAdd
                className="border p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
                size={40}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
