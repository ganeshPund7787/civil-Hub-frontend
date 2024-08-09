import { CivilUserType } from "@/types";

type Props = {
  conversation: ClientTypes | CivilUserType | any;
  emoji: string;
  lastIdx: boolean;
};

const Conversation = ({ conversation, emoji, lastIdx }: Props) => {
  return (
    <>
      <div
        className={`flex gap-2 hover:bg-cyan-500 rounded p-2 py-1 cursor-pointer
          ${false ? "bg-sky-500" : ""}`}
      >
        <div className={`avatar ${true ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={conversation?.profilePictureUrl || conversation?.photoUrl}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            <span className="">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h1" />}
    </>
  );
};

export default Conversation;
