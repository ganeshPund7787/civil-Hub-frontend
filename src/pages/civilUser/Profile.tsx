import { useAppSelectore } from "@/App/store";
import { SlLocationPin } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";
import EditLanguage from "@/components/civilUser/EditLanguage";

const Profile = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);
  console.log(CurrentCivilUser.languages.length);
  return (
    <div className="flex flex-col min-h-screen p-5">
      <div className="flex items-center min-h-full rounded-t-[1rem] max-w-full p-5 border-b-2 border-slate-500">
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
            <SlLocationPin /> {CurrentCivilUser.city}, {CurrentCivilUser.state},{" "}
            {CurrentCivilUser.country}
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row">
        <div className="w-full md:w-[30%]">
          <div className="flex h-full items-center p-6">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl tracking-wide">Languages</h1>
                <p className="flex gap-4 items-center">
                  <IoAdd
                    className="border cursor-pointer p-2 border-cyan-500 rounded-full"
                    size={40}
                  />
                  <EditLanguage></EditLanguage>
                </p>
              </div>
              {CurrentCivilUser.languages &&
                CurrentCivilUser?.languages?.map((language: string) => (
                  <span>{language}</span>
                ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 md:border-l-2 md:border-t-0 border-slate-500  w-full md:w-[70%]">
          {" "}
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
