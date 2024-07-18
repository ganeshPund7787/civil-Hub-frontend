import { useAppSelectore } from "@/App/store";
import { SlLocationPin } from "react-icons/sl";
import { RiChatDeleteLine } from "react-icons/ri";
import AddLanguage from "@/components/civilUser/AddLanguage";
import AddEducation from "@/components/civilUser/AddEducation";
import AddSkills from "@/components/civilUser/AddSkills";
import AddWorkExperiance, {
  UserExperianceFormData,
} from "@/components/civilUser/AddWorkExperiance";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import SkillsCarousel from "@/components/civilUser/SkillsCarousel";
import AddProject from "@/components/civilUser/AddProject";
import UpdateProfileHead from "@/components/civilUser/UpdateProfileHead";
import { EducationType } from "@/types";
import EducationCard from "@/components/civilUser/EducationCard";
import ExperianceCard from "@/components/civilUser/ExperianceCard";

const Profile = () => {
  const { CurrentCivilUser, loading } = useAppSelectore((state) => state.user);

  return (
    <div className="flex flex-col min-h-full md:p-5">
      <div className="flex justify-between items-center min-h-full rounded-t-[1rem] max-w-full p-1 md:p-5 border-b-2 border-slate-500">
        {/* Profile Img, name and Address */}
        <div className="flex flex-col justify-center md:flex-row">
          <div className="avatar">
            {/* online */}
            <div className="ml-6 md:ml-0 h-24 rounded-full">
              <img src={CurrentCivilUser.photoUrl} className="h-40 w-40" />
            </div>
          </div>
          <div className="p-5">
            <h1 className="md:text-2xl font-semibold">
              {CurrentCivilUser.fullName}
            </h1>
            <p className="mt-2 flex gap-1 items-center text-sm lowercase">
              <SlLocationPin /> {CurrentCivilUser.city},{" "}
              {CurrentCivilUser.state}, {CurrentCivilUser.country}
            </p>
          </div>
        </div>

        {/* Profile Head & Update Button */}
        <div className="cursor-pointer relative right-0 p-2 border-cyan-500 hover:bg-opacity-30 rounded-full">
          <UpdateProfileHead user={CurrentCivilUser} loading={loading} />
        </div>
      </div>

      {/* User language, Skill, Work Experiance & Education section */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full mt-5 md:w-[30%]">
          <div className="flex flex-col items-center p-6">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-2xl font-semibold tracking-wide">
                Languages
              </h1>
              <div className="flex items-center">
                <AddLanguage />
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 mt-5">
              {CurrentCivilUser.languages &&
                CurrentCivilUser?.languages?.map((language: string) => (
                  <span
                    key={language}
                    className="border flex items-center justify-between hover:bg-slate-800 hover:border-cyan-500 border-slate-600 rounded-full w-full px-8 py-2 "
                  >
                    {language}
                    <RiChatDeleteLine
                      className="cursor-pointer hover:text-red-500"
                      size={20}
                    />
                  </span>
                ))}
            </div>
          </div>

          {/* Education...  */}
          <div className="flex items-center p-6">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-2xl font-semibold tracking-wide">
                Education
              </h1>
              <div className="flex gap-4 items-center">
                <AddEducation />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-3 items-center gap-3 px-10">
            {CurrentCivilUser.education &&
              CurrentCivilUser.education.map((education: EducationType) => (
                <EducationCard key={education.degree} education={education} />
              ))}
          </div>
        </div>

        {/* Skill & Work Experiance section */}
        <div className="border-t-2 md:border-l-2 md:border-t-0 border-slate-500 w-full md:w-[70%]">
          {" "}
          <div className="">
            <div className="flex justify-between p-6">
              <h1 className="font-semibold text-2xl">Skills</h1>
              <AddSkills />
            </div>
            <div className="flex flex-wrap gap-5 py-2 px-6">
              {CurrentCivilUser.skills.length > 0 &&
                CurrentCivilUser?.skills?.map((skill: string) => (
                  <div
                    key={skill}
                    className="border hover:bg-slate-800 hover:border-cyan-500 border-slate-600 rounded-[15px] p-2"
                  >
                    {skill}
                  </div>
                ))}
            </div>
            <hr className="text-slate-600" />
          </div>
          <div className="">
            <div className="flex justify-between p-6">
              <h1 className="font-semibold text-2xl">Work experiance</h1>
              <AddWorkExperiance />
            </div>
            <div className="flex flex-col gap-4 px-6">
              {CurrentCivilUser?.workExperience &&
                CurrentCivilUser?.workExperience.map(
                  (work: UserExperianceFormData) => (
                    <ExperianceCard key={work.id} work={work} />
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
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

      {/* Project Section */}
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

      {/* User Activity Section like posts */}
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
