import { Button, FormControl, FormLabel, VStack, bgGradient } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import axios from "axios";
import React from 'react';
import  { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory} from "react-router-dom";

const Login = () => {

    const [show, setShow] = useState(false);
<<<<<<< HEAD
    // const [name, setName] = useState();
=======
    const [name, setName] = useState();
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const handleClick = () => setShow(!show);

    const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

    return  <VStack spacing="20px">
<<<<<<< HEAD
=======
        <FormControl id='first-name' isRequired>
            
            <Input 
                placeholder='*Enter Your Name*'
                onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4
        <FormControl id='email' isRequired>
            
            <Input 
                placeholder='*Enter Your E-mail*'
                onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='Password' isRequired>
           <InputGroup>
                <Input 
                    type={show? "text" : "password"}
                    placeholder='*Enter Your Password*'
                    onChange={(e)=>setPassword(e.target.value)}
                />  
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>         
           </InputGroup> 

        </FormControl>


        <Button 
            // backgroundColor="#7928CA"
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            width="100%"
            style={{marginTop:15}}
            onClick={submitHandler}
<<<<<<< HEAD
            isLoading={loading}
=======
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4
        >
            Sign Up
        </Button>

    </VStack>;
  
    
};

export default Login;