"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar/navbar";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    spa: {
      green: "#3b672b",
      // ...
      grey: "#585b54",
    },
  },
});

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [photo, setPhoto] = useState(null);

  const objectWithData = { name: name, email: email, number: number };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired actions with the form data and photo
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Photo:", photo);
    console.log("Number: ", number);
    // send the data to the backend
    fetch("/api/booknow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectWithData),
    });
    // Reset form fields
    setName("");
    setEmail("");
    setPhoto(null);
    setNumber("");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        bgGradient="linear(to-b, spa.green, spa.grey)"
        direction="column"
        justifyContent="space-between"
      >
        <Navbar flexGrow={0} flexShrink={1} flexBasis="auto" />
        <Box maxW="sm" mx="auto" mt={8} p={4}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "white" }}
                  borderRadius="md"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "white" }}
                  borderRadius="md"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="number">Phone Number</FormLabel>
                <Input
                  type="tel"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "white" }}
                  borderRadius="md"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="photo">Photo</FormLabel>
                <Input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  required
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "white" }}
                  borderRadius="md"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                borderRadius="md"
                px={8}
                py={4}
                mt={4}
                _hover={{ bg: "spa.green" }}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default FormPage;
