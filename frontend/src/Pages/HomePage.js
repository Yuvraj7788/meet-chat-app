import React from 'react';
import { Container, Box, Text,
          Tab, Tabs, TabList, 
          TabPanel, TabPanels
} from "@chakra-ui/react";
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
export const HomePage = () => {
  return <Container maxW=  'xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 35px 100px"
        borderRadius="lg"
      >
        <Text fontSize='4xl' fontFamily="Comfortaa" color="white" >
          Welcome to Meet<strong>Chat :) </strong>
        </Text>  
      </Box>  
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' >
          <TabList>  
            <Tab marginRight="5" color="white" width="50%" borderWidth="1px">Log In</Tab>
            <Tab color="white" width="50%" borderWidth="1px">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  </Container>;
};
