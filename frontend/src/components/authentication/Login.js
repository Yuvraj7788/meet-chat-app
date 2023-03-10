import { Button, FormControl, FormLabel, VStack, bgGradient } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

import React from 'react';
import  { useEffect, useState } from "react";

const Login = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleClick = () => setShow(!show);

    const submitHandler = () => {};

    return  <VStack spacing="20px">
        <FormControl id='first-name' isRequired>
            
            <Input 
                placeholder='*Enter Your Name*'
                onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>
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
        >
            Sign Up
        </Button>

    </VStack>;
  
    
};

export default Login;