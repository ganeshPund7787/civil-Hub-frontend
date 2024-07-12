import { useAppSelectore } from "@/App/store";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { SlLocationPin } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";

const Profile = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);
  console.log(CurrentCivilUser.languages.length);
  return (
    <div className="flex flex-col min-h-screen p-5">
      <div className="flex min-h-full rounded-t-[1rem] max-w-full p-5 border-2 border-b-0 border-slate-500">
        <div className="avatar">
          {/* online */}
          <div className="w-24 rounded-full">
            <img src={CurrentCivilUser.photoUrl} />
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
      <div className="">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-full max-w-full rounded-lg "
        >
          <ResizablePanel
            className="border-2 border-r-0 border-slate-500"
            defaultSize={25}
          >
            <div className="flex h-full items-center p-6">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl tracking-wide">Languages</h1>
                  <p className="flex gap-4 items-center">
                    <IoAdd
                      className="cursor-pointer border p-2 border-cyan-500 rounded-full"
                      size={40}
                    />
                    <MdModeEditOutline
                      className="cursor-pointer border p-2 border-cyan-500 rounded-full"
                      size={40}
                    />
                  </p>
                </div>
                {CurrentCivilUser.languages}
              </div>
            </div>
          </ResizablePanel>
          <ResizablePanel
            className="border-2 border-slate-500"
            defaultSize={75}
          >
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Profile;
