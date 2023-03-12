import { Button, FormControl, FormLabel, VStack, bgGradient } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import axios from "axios";
import React from 'react';
import  { useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';

const Signup = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpasssword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();
    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {
        setLoading(true);
        if(pics === undefined){
            toast({
                title: "Please select an image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        if(pics.type === "image/jpeg" || pics.type === "image/png" ){
            const data = new FormData();
            data.append("file",pics);
            data.append("upload_preset","chat-app");
            data.append("cloud_name","dztoerhpt");
            fetch("https://api.cloudinary.com/v1_1/dztoerhpt/image/upload",{
                method: 'post',
                body: data,
            }).then((res) => res.json()).then((data) => {
                setPic(data.url.toString());
                setLoading(false);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            })
        }else{
            toast({
                title: "Please select a jpeg or png image!",
                status: "warning",
                duration: "5000",
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
    };

    const submitHandler = async () => {
        setLoading(true);
        if (!name || !email || !password || !confirmpasssword) {
            toast({
                title: "Please fill all the fields!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        if (password !== confirmpasssword) {
            toast({
                title: "Passwords do not match!",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",            
            });
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const {data} = await axios.post(
                "/api/user",{
                    name,email,password,pic},
                    config
            );
            toast({
                title: "Registration Successfull",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            localStorage.setItem('userInfo',JSON.stringify(data));

        setLoading(false);
        history.pushState('/chats');
        } catch (error) {
            toast({
                title: "Error occured!",
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
        <FormControl id='Password' isRequired>
           <InputGroup>
                <Input 
                    type={show? "text" : "password"}
                    placeholder='*Confirm Password*'
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />  
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>         
           </InputGroup> 

        </FormControl>
        <FormControl id="pic" >
            <FormLabel>
                <Input
                    placeholder='Add Profile Picture'
                    type="file"
                    p={'1.5'}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormLabel>
        </FormControl>
        <Button 
            // backgroundColor="#7928CA"
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            width="100%"
            style={{marginTop:15}}
            onClick={submitHandler}
            isLoading={loading}
        >
            Sign Up
        </Button>

    </VStack>;
  
    
};

export default Signup;