import { updateStartClient } from "@/App/features/clientSlice";
import { useAppDispatch, useAppSelectore } from "@/App/store";
import EditProfile from "@/components/ClientUser/EditProfile";
import CreatePost from "@/components/CreatePost";
import LogOut from "@/components/LogOut";
import { Button } from "@/components/ui/button";
import { MdModeEditOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ClientProfile = () => {
  const { Client, isUpdate } = useAppSelectore((state) => state.client);
  const dispatch = useAppDispatch();
  return (
    <>
      {Client && (
        <>
          {isUpdate ? (
            <EditProfile />
          ) : (
            <div className="flex flex-col min-h-full md:p-5">
              <div className="flex justify-between items-center min-h-full rounded-t-[1rem] max-w-full p-1 md:p-5 border-b-2 border-slate-500">
                <div className="flex flex-col justify-center md:flex-row">
                  <div className="avatar">
                    {/* online */}
                    <div className="ml-6 md:ml-0 h-24 rounded-full">
                      <img
                        src={Client.profilePictureUrl}
                        className="h-40 w-40"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h1 className="md:text-2xl text-cyan-400 font-semibold">
                      {Client.fullName}
                    </h1>
                    {Client.address && (
                      <p className="mt-2 flex gap-1 items-center text-sm lowercase">
                        <SlLocationPin />{" "}
                        {Client.address.street
                          ? Client.address.street
                          : "No share"}{" "}
                        {Client.address.state} {Client.address.country}
                      </p>
                    )}
                  </div>
                </div>
                <div className="cursor-pointer relative right-0 p-2 border-cyan-500 hover:bg-opacity-30 rounded-full">
                  <Button
                    variant={"ghost"}
                    onClick={() => dispatch(updateStartClient())}
                  >
                    <MdModeEditOutline
                      className="border cursor-pointer p-2 border-cyan-500 rounded-full"
                      size={40}
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-h-full rounded-t-[1rem] max-w-full p-1 md:p-5 border-b-2 border-slate-500">
                {Client.email && (
                  <div className="flex gap-3">
                    <span> * Email Address : </span>
                    <span className="text-cyan-400">{Client.email}</span>{" "}
                  </div>
                )}
                {Client.phoneNumber && (
                  <div className="flex gap-3">
                    <span> * Contact : </span>
                    <span className="text-cyan-400">
                      {Client.phoneNumber}
                    </span>{" "}
                  </div>
                )}
                {Client.company && (
                  <div className="flex gap-3">
                    <span> * Company Name : </span>
                    <span className="text-cyan-400">{Client.company}</span>
                  </div>
                )}
                {Client.website && (
                  <div className="flex gap-3">
                    <span> * website Name : </span>
                    <a
                      href={Client.website}
                      className="text-cyan-400 hover:underline hover:text-blue-700"
                    >
                      {Client.website}
                    </a>
                  </div>
                )}
                {Client.bio && (
                  <div className="gap-3">
                    <span> * Bio : </span>
                    <div>{Client.bio}</div>
                  </div>
                )}
              </div>
              <div className="flex mt-5 flex-col min-h-full md:p-5">
                <div className="border-2 border-slate-500 rounded md:rounded-[1rem]">
                  <div className="flex items-center justify-between p-5">
                    <h1 className="text-2xl font-semibold">
                      Activity / Posts{" "}
                    </h1>
                    <CreatePost />
                  </div>
                </div>
              </div>
              <LogOut />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ClientProfile;