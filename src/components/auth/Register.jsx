import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { apiUsers } from "../../api/api.users";
import { useBoolean } from "../../hooks/useBoolean";
import { useForm } from "../../hooks/useForm";
import { authUser } from "../../redux/actions/authActions";
import { updateUser } from "../../redux/actions/userActions";


export const Register = () => {

    const [dataForm, handleInputChange] = useForm();
    const [myBoolean, setMyBoolean] = useBoolean(false);
    const dispatch = useDispatch();


    async function submitForm(){
        const user = await apiUsers.addUser(dataForm);
        if(user.ok){
            const {data} = user;
            dispatch(authUser(data.token));
            dispatch(updateUser(data.user));
            localStorage.setItem("data-auth", JSON.stringify(data));
        }
    }

    return (
        <VStack spacing="5px">
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    name="name"
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email Address"
                    autoComplete="off"
                    name="email"
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={myBoolean ? "text" : "password"}
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        onChange={handleInputChange}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={function(){
                            setMyBoolean(!myBoolean);
                        }}>
                            {myBoolean ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitForm}
                /* isLoading={picLoading} */
                isLoading={false}
            >
                Sign Up
            </Button>
        </VStack>
    )
}
