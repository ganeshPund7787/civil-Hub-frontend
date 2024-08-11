import { useAppSelectore } from "@/App/store";
import useListenMessages from "@/Hooks/Messages_Hook/useListenMessages";
import MessageSkeletons from "@/skeletons/MessageSkeletons";
import { MessageType } from "@/types";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages } = useAppSelectore((msg) => msg.conversation);
  useListenMessages();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!false &&
        messages.length > 0 &&
        messages.map((message: any | MessageType) => (
          <div ref={lastMessageRef} key={message._id}>
            {/* <Message message={message} /> */}
            <span>{message.message}</span>
          </div>
        ))}

      {false && [...Array(4)].map((_, idx) => <MessageSkeletons key={idx} />)}

      {!false && messages.length === 0 && (
        <p className="text-center">
          send the message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
