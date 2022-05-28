import React from 'react';
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import { ImSearch } from "react-icons/im";
import { BsBellFill,BsSearch } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeSessionAuth } from '../../redux/actions/authActions';
import { closeSessionUser } from '../../redux/actions/userActions';
import { useForm } from '../../hooks/useForm';
import { apiUsers } from '../../api/api.users';
import { useSearchUsers } from '../../hooks/useSearchUsers';
import { UserListItem } from './UserListItem';



export const SideDrawer = () => {

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataForm, setDataForm] = useForm();

  const [wantedUsers, setWantedUsers] = useSearchUsers();

  const {userMain} = useSelector(state => state.user)

  function closeSession() {
    dispatch(closeSessionAuth());
    dispatch(closeSessionUser());
    localStorage.removeItem("data-auth");
  }

  async function searchUsers(){
    setWantedUsers(await apiUsers.findUsers(dataForm.word, userMain._id));
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        background="white"
        width="100%"
        padding="5px 10px 5px 10px"
        borderWidth="5px" >
        <Tooltip
          label="Busca usuarios para chatear"
          hasArrow
          placement='bottom-end'
        >
          <Button variant="ghost" onClick={onOpen}>
            <ImSearch />
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2xl">
          Talk-A-Tive
        </Text>

        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >

          <Menu>
            <MenuButton padding={1}>
              <BsBellFill
                style={{
                  fontSize: "1.2em",
                  margin: ".2em .5em"
                }}
              />
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineArrowDown />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={userMain.name}
                src={userMain.avatar}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Mi perfil</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={closeSession}
              >Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>

        </div>

      </Box>


      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" alignItems="center" marginBottom={3} pb={2}>
              <Input
                placeholder="Search by name or email"
                onChange={setDataForm}
                name="word"
                autoComplete='off'
                style={{
                  margin : "0 .5em 0 0"
                }}
              />
              <Button onClick={searchUsers}>Go</Button>
            </Box>

                {
                  (wantedUsers.length === 0) ? 
                  <div
                    style={{
                      marginTop : "2em",
                      display : "flex",
                      flexDirection : "column",
                      alignItems : "center",
                      justifyContent : "center"
                    }}
                  >
                    <BsSearch 
                      style={{
                        fontSize : "3em",
                        fill : "#0009"
                      }}
                    />
                    <p
                      style = {{
                        fontSize : ".9em",
                        marginTop : "1em",
                        color : "#0009"
                      }}
                    >Busca a usuarios para chatear</p>
                  </div> :
                  wantedUsers.map(travel => 
                    <UserListItem
                      key={travel._id}
                      id={travel._id}
                      dataUser={travel}
                    />
                    )
                }

          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </>
  )
}

