
import MsgContainer from "@/components/Messages/Msg_Container/MsgContainer";
import MsgSidebar from "@/components/Messages/sidebar/MsgSidebar";

const Messages = () => {
  return (
    <div className="flex">
      <MsgSidebar />
      <MsgContainer />
    </div>
  );
};

export default Messages;
