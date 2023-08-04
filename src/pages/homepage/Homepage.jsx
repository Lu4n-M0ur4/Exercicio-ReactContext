import { ChakraProvider, Divider, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
export default function Homepage() {
  const context = useContext(GlobalContext);

  const { users, getUserByid, setUserData } = context;


  return (
    <ChakraProvider>
      {users.map((user) => (
        <>
          <Flex key={user.id}>
            <Box display="flex" justifyContent="space-around" width="100%">
              <Card maxW="sm" boxShadow={"dark-lg"}>
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />

                  {/* <Stack mt="6" spacing="3"></Stack> */}
                </CardBody>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="100%"
                >
                  <Divider width="90%" m="auto" />
                  <Text flexWrap="nowrap" fontSize="6xl">
                    {user.name}
                  </Text>
                </Box>
              </Card>
            </Box>
          </Flex>
          
        </>
      ))}
    </ChakraProvider>
  );
}
