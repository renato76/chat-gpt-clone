import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"
import MobileMenu from "../../../components/MobileView"

type Props = {
  params: {
    id: string
  }
}

function ChatPage({ params: { id } }: Props) {

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="text-white mt-2 m-2 md:hidden">
        <MobileMenu />
      </div>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage