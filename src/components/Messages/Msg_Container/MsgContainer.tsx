const MsgContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!false ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex items-center gap-3 bg-slate-500 px-4 py-2 mb-2">
            <img src={""} className="h-10 w-10 rounded-full" alt="IMG" />
            <span className="text-gray-900 font-bold">usernam</span>
          </div>
          {/* <Messages /> */}
          {/* <MessageInput /> */}
        </>
      )}
    </div>
  );
};
export default MsgContainer;

const NoChatSelected = () => {
  // const { authUser } = useAuthContex();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        {/* <p>Welcome 👋 {authUser.fullname} ❄</p> */}
        <p>Welcome 👋 User ❄</p>
        <p>Select a chat to start messaging</p>
        {/* <TiMessages className="text-3xl md:text-6xl text-center" /> */}
      </div>
    </div>
  );
};
