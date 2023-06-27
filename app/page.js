"use client";
import Navbar from "../components/navbar/navbar";
import {
  ChakraProvider,
  Heading,
  Flex,
  extendTheme,
  Box,
  Text,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import styles from "./page.module.css";

// TODO create a page for customer testimonies and reviews
// maybe add an API to the yelp page?

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

export default function Home() {
  const bgImage = {
    background: "url('/spaobjects.jpg') center/cover no-repeat",
  };
  return (
    <ChakraProvider theme={theme}>
      <Flex sx={bgImage} direction="column" justifyContent="space-between">
        <Navbar flexGrow={0} flexShrink={1} flexBasis="auto" />
        <Flex height="80vh" direction="column" justify="center">
          <Flex height="30%" direction="column">
            <Heading
              as="h1"
              size="2xl"
              color="white"
              textAlign="center"
              p="5px"
            >
              Relaxing, Rejuvenating, Remedies
            </Heading>
            <Heading as="h3" size="md" color="white" textAlign="center" p="5px">
              Bring serenity and peace directly to your door
            </Heading>
          </Flex>
          <Flex direction="row" justify="center">
            <Box className={styles.card} cursor="pointer">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <h2>
                  See Our Services <span>-&gt;</span>
                </h2>
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          paddingX={4}
          paddingBottom={4}
          id="services"
          sx={{ scrollBehavior: "smooth" }}
        >
          <GridItem w="100%" h="100vh" bg="blue.500">
            <Heading
              as="h2"
              size="2xl"
              color="white"
              textAlign="center"
              p="5px"
            >
              Spot Massage
            </Heading>
            <Stat textAlign="center">
              <StatNumber>$75.00</StatNumber>
              <StatHelpText>1 hour</StatHelpText>
            </Stat>
            <Text>
              Get a massage on your spot treatment. Everyone loves it, see these
              reviews.
            </Text>
          </GridItem>
          <GridItem w="100%" h="100vh" bg="blue.400">
            <Heading
              as="h2"
              size="2xl"
              color="white"
              textAlign="center"
              p="5px"
            >
              Thigh Massage
            </Heading>
            <Stat textAlign="center">
              <StatNumber>$120.00</StatNumber>
              <StatHelpText>2 hour</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem w="100%" h="100vh" bg="blue.300">
            <Heading
              as="h2"
              size="2xl"
              color="white"
              textAlign="center"
              p="5px"
            >
              Swedish Massage
            </Heading>
            <Stat textAlign="center">
              <StatNumber>$65.00</StatNumber>
              <StatHelpText>30 minutes</StatHelpText>
            </Stat>
            <Text>
              Because you know the Swedes knew how to get around the body. Book
              a Swedish massage today.
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </ChakraProvider>
  );
}
