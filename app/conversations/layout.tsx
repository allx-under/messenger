import { PropsWithChildren } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

const ConversationLayout = async ({ children }: PropsWithChildren) => {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users} />{" "}
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationLayout;
