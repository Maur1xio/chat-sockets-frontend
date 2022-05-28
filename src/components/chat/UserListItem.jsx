import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react'

export const UserListItem = ({ id, dataUser }) => {

    const { name, email, avatar } = dataUser;


    function clickOnUser(){
        console.log(`Search chat with user: ${name}`);
    }

    console.log("Renderizando...");

    return (
        <Box
            onClick={clickOnUser}
            cursor="pointer"
            bg="#E8E8E8"
            _hover={{
                background: "#38B2AC",
                color: "white",
            }}
            width="100%"
            display="flex"
            alignItems="center"
            color="black"
            paddingX={3}
            paddingY={2}
            mb={2}
            borderRadius="lg"
            border="1px solid #0006"
        >
            <Avatar
                mr={2}
                size="sm"
                cursor="pointer"
                name={name}
                src={avatar}
            />
            <Box>
                <Text>{name}</Text>
                <Text fontSize="xs">
                    <b>Email : </b>
                    {email}
                </Text>
            </Box>
        </Box>
    )
}
