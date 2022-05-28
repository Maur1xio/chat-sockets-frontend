import React from 'react'
import { Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {AiOutlineUsergroupAdd } from "react-icons/ai";


export const MyChats = () => {

  const { selectedChat } = useSelector(state => state.ui);

  return (
    <Box
      display={{ base: selectedChat ? "none !important" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      padding={3}
      background="white"
      width={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >

      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
          <Button
            d="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AiOutlineUsergroupAdd />}
          >
            New Group Chat
          </Button>

      </Box>

    </Box>
  )
}
