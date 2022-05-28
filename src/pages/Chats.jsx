
import { Box } from '@chakra-ui/react'
import React from 'react'
import { ChatBox } from '../components/chat/ChatBox'
import { MyChats } from '../components/chat/MyChats'
import { SideDrawer } from '../components/chat/SideDrawer'

const Chats = () => {
  return (
    <div style={{ width: "100%" }}>

      <SideDrawer />

      <Box
        display= "flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        <MyChats />
        <ChatBox />
      </Box>

    </div>
  )
}

export default Chats