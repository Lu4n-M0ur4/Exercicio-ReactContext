import {
  Button,
  ButtonGroup,
  ChakraProvider,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
export default function Homepage() {
  return (
    <>
      {" "}
      <ChakraProvider>
        <Flex >
          {" "}
          <Box display="flex" justifyContent="space-around" width="100%">
          <Card maxW="sm" boxShadow={"dark-lg"}>
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3"></Stack>
            </CardBody>
            <Divider />
            <Flex minWidth="max-content" width="100%">
              <CardFooter width="100%">
                <ButtonGroup width="100%" spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Spacer />
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Flex>
          </Card>
          <Card maxW="sm" boxShadow={"dark-lg"}>
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3"></Stack>
            </CardBody>
            <Divider />
            <Flex minWidth="max-content" width="100%">
              <CardFooter width="100%">
                <ButtonGroup width="100%" spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Spacer />
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Flex>
          </Card>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
}
