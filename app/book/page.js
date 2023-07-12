"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  extendTheme,
  Select,
  ChakraProvider,
  Text,
  Textarea,
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

// TODO how will the user be able to see when the massuese is available? What if the massuese isn't available

function FormPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [photo, setPhoto] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(service);
  }, [service]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired actions with the form data and photo
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Photo:", photo);
    console.log("Address:", address);
    console.log("Number: ", number);
    console.log("Selected option:", selectedOption);

    // Create a new FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("email", email);
    formData.append("service", selectedOption);
    // Append the JPG file
    formData.append("photoId", photo);

    // send the data to the backend
    fetch("/api/booknow", {
      method: "POST",
      body: formData,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setNumber("");
    setAddress("");
    setSelectedOption("");
    setPhoto(null);
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
        <Flex
          direction="column"
          width={["75%", "90%", "50%"]}
          justifyContent="space-evenly"
          alignSelf="center"
        >
          <Flex width="100%" paddingBottom="10px">
            <Text color="white">
              Please contact me using the form for scheduling purposes. I will
              reach out to you for a confirmation of the time and place. Payment
              will be collected in-person once the session is completed.
            </Text>
          </Flex>
          <Flex
            as="form"
            direction={["column", "row"]}
            justifyContent="space-between"
            onSubmit={handleSubmit}
          >
            <VStack spacing={4} w={["100%", "45%"]}>
              <FormControl isRequired>
                <FormLabel htmlFor="Service">Service</FormLabel>
                <Select
                  variant="filled"
                  placeholder="Select option"
                  required
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "white" }}
                  borderRadius="md"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="swedish">Swedish Massage</option>
                  <option value="hotstone">Hot Stone Massage</option>
                  <option value="thai">Thai Massage</option>
                </Select>
              </FormControl>
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
            </VStack>
            <VStack spacing={4} w={["100%", "45%"]}>
              <FormControl isRequired>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "white" }}
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="photo">Photo ID</FormLabel>
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
              <FormControl>
                <FormLabel htmlFor="specialRequests">
                  Special Requests or Other Considerations
                </FormLabel>
                <Textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
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
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default FormPage;
