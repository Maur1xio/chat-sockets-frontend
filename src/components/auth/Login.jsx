import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useBoolean } from "../../hooks/useBoolean";
import { useForm } from "../../hooks/useForm";
import { apiUsers } from "../../api/api.users";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/actions/authActions";
import { updateUser } from "../../redux/actions/userActions";


export const Login = () => {

    const [dataForm, handleInputChange] = useForm();
    const [myBoolean, setMyBoolean] = useBoolean(false);
    const dispatch = useDispatch();

    async function submitForm(){
        const user = await apiUsers.loginUser(dataForm);

        if(user.ok){
            const {data} = user;
            dispatch(authUser(data.token));
            dispatch(updateUser(data.user));
            localStorage.setItem("data-auth", JSON.stringify(data));
        }
    }

    return (
        <VStack spacing="10px">
            <form></form>
            <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    name="email"
                    placeholder="Enter Your Email Address"
                    autoComplete="off"
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
                        onChange={handleInputChange}
                        name="password"

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
                isLoading={false}
                onClick={submitForm}
            >
                Login
            </Button>
        </VStack>
    )
}
