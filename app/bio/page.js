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
        justifyContent="space-between"
      >
        <Navbar flexGrow={0} flexShrink={1} flexBasis="auto" />
        <Box maxW="lg" mx="auto" mt={8} p={4}>
          <Heading as="h1" mb={4}>
            Business Name
          </Heading>

          <Box display="flex" alignItems="center" mb={4}>
            <Image
              src="/business-logo.png"
              alt="Business Logo"
              boxSize={100}
              mr={4}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet mauris et est tincidunt cursus ac at mi. Fusce commodo
              dui nec justo commodo, at ultrices mi ultricies.
            </Text>
          </Box>

          <Heading as="h2" size="lg" mb={2}>
            Background
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            felis sed nisi ultricies commodo a vel sem. Phasellus id cursus
            ligula. Fusce vestibulum nisl vel risus varius lacinia. Maecenas
            malesuada dui at urna aliquet, id dapibus metus bibendum.
          </Text>

          <Heading as="h2" size="lg" mb={2}>
            History
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            felis sed nisi ultricies commodo a vel sem. Phasellus id cursus
            ligula. Fusce vestibulum nisl vel risus varius lacinia. Maecenas
            malesuada dui at urna aliquet, id dapibus metus bibendum.
          </Text>

          <Heading as="h2" size="lg" mb={2}>
            Credibility
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            felis sed nisi ultricies commodo a vel sem. Phasellus id cursus
            ligula. Fusce vestibulum nisl vel risus varius lacinia. Maecenas
            malesuada dui at urna aliquet, id dapibus metus bibendum.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default BusinessDetailsPage;
