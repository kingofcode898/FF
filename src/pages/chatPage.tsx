import React from 'react'
import ChatComponent from '../componenets/chat'

function ChatPage() {
  return (
    <>
      <div className='chatPage'>
        <ChatComponent language='Spanish' level='beginner' />
      </div>
      
    </>
  )
}

export default ChatPage