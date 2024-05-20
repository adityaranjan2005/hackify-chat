import React from 'react';

import ChatroomPreview from './ChatroomPreview'
import Chatroom from '../config/chatrooms';

export default ({
  chatrooms,
  onEnterChatroom
}) => (
  <div>
    {
      Chatroom.map(chat => (
        <ChatroomPreview
          key={chat.name}
          chatroom={chat}
          onEnter={() => onEnterChatroom(chat.name)}
        />
      ))
    }
  </div>
)
