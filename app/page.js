"use client";
import Navbar from "../components/navbar/navbar";
import {
  ChakraProvider,
  Heading,
  Flex,
  extendTheme,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import styles from "./page.module.css";

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
            <Link href="./book" className={styles.card}>
              <h2>
                Book Now <span>-&gt;</span>
              </h2>
            </Link>
            <Link href="/api/python">
              <code className="font-mono font-bold">api/index.py</code>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
