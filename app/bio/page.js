"use client";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar/navbar";

const theme = extendTheme({
  colors: {
    spa: {
      green: "#3b672b",
      // ...
      grey: "#585b54",
    },
  },
});

function BusinessDetailsPage() {
  const bgImage = {
    background: "url('/spaobjects.jpg') center/cover no-repeat",
  };
  return (
    <ChakraProvider theme={theme}>
      <Flex
        bgGradient="linear(to-b, spa.green, spa.grey)"
        direction="column"
        height="100vh"
      >
        <Navbar flexGrow={0} flexShrink={1} flexBasis="auto" />
        <Box maxW="lg" mx="auto" mt={8} p={4}>
          <Heading as="h1" mb={4}>
            First name Last name
          </Heading>

          <Flex alignItems="center" mb={4}>
            <Text>
              Lakeshore Massages was started by me in 2023 after I moved to
              Chicago. I've been all over the world learning massage techniques
              from Asia, Africa and Europe. I choose to operate my own practice
              because I enjoy my job more when I get to make a personal
              connection with my clients. That is also why I choose to bring my
              services directly to you, as that creates a more personal
              experience.
            </Text>
          </Flex>

          <Heading as="h2" size="lg" mb={2}>
            Background
          </Heading>
          <Text>
            I was born in City in Ethiopia, where my mother taught me how to
            massage for local traditions. Once I was 18, I started to travel the
            world, going to Thailand, Sweden and China to improve my massage
            practice there.
          </Text>

          <Heading as="h2" size="lg" mb={2}>
            Credibility
          </Heading>
          <Text>
            I am a licensed massage Therapist in State of Illinois (license
            #227.015501). I own and operate Lakeshore Massages by myself.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default BusinessDetailsPage;
