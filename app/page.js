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
  Link,
} from "@chakra-ui/react";
import * as Scroll from "react-scroll";
import styles from "./page.module.css";
import ReviewSnippet from "@/components/reviewSnippet";
import ActiveButton from "@/components/activeButton";
import "@fontsource/calligraffitti/400.css";

var SmoothLink = Scroll.Link;

// TODO create a page for customer testimonies and reviews
// maybe add an API to the yelp page?

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: `'Calligraffitti', sans-serif`,
  },
  colors: {
    spa: {
      green: "#3b672b",
      turquoise: "#4f7c5b",
      dark_turquoise: "#264b43",
      grey: "#585b54",
    },
    lavendar: {
      100: "#D1B7E1",
      200: "#C8A9DB",
      300: "#BE9AD5",
      400: "#B58CCF",
    },
  },
});

export default function Home() {
  const bgImage = {
    background: "url('/massagelanding.jpg') center/cover no-repeat",
  };

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      text: "Excellent service! The massage therapists were professional and skilled. I felt relaxed and rejuvenated after the session.",
      verified: true,
      externalLink:
        "https://stackoverflow.com/questions/44860766/how-to-create-underline-effect-on-hovered-links-in-css",
    },
    {
      name: "Emily Johnson",
      rating: 4,
      text: "I really enjoyed the convenience of having a mobile massage. The therapist arrived on time and created a soothing ambiance. The massage was great and helped relieve my muscle tension.",
      verified: true,
      externalLink:
        "https://stackoverflow.com/questions/44860766/how-to-create-underline-effect-on-hovered-links-in-css",
    },
    {
      name: "Michael Davis",
      rating: 5,
      text: "Outstanding experience! The therapist was attentive to my needs and focused on the areas that required the most attention. I highly recommend their mobile massage service.",
      verified: true,
      externalLink:
        "https://stackoverflow.com/questions/44860766/how-to-create-underline-effect-on-hovered-links-in-css",
    },
    {
      name: "Sarah Thompson",
      rating: 4,
      text: "The mobile massage was a wonderful treat. It was incredibly convenient to have the therapist come to my home. The massage was relaxing, and the therapist was skilled and professional.",
      verified: true,
      externalLink:
        "https://stackoverflow.com/questions/44860766/how-to-create-underline-effect-on-hovered-links-in-css",
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" justifyContent="space-between">
        <Flex sx={bgImage} height="100vh" direction="column">
          <Navbar flexGrow={0} flexShrink={1} flexBasis="auto" />
          <Flex
            height="80vh"
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <SmoothLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Grid
                width="50vw"
                p="20px"
                templateAreas={`
                "larrow header rarrow"
                "larrow main rarrow"`}
                templateColumns="1fr 8fr 1fr"
                templateRows="3fr 1fr"
                bg="lavendar.400"
                m="30px"
                className={styles.banner}
                cursor="pointer"
              >
                <GridItem
                  area={"larrow"}
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <span>&darr;</span>
                </GridItem>
                <GridItem area={"header"}>
                  <Heading as="h1" size="2xl" color="white" textAlign="center">
                    Relax, Rejuvenate, Restore
                  </Heading>
                </GridItem>
                <GridItem area={"main"}>
                  <Heading as="h3" size="md" color="white" textAlign="center">
                    Bring serenity and peace directly to your door
                  </Heading>
                </GridItem>
                <GridItem
                  area={"rarrow"}
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <span>&darr;</span>
                </GridItem>
              </Grid>
            </SmoothLink>
          </Flex>
        </Flex>
        <Box bgGradient="linear(to-b, spa.turquoise, spa.dark_turquoise)">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={4}
            paddingX={4}
            paddingY={4}
            id="services"
            sx={{ scrollBehavior: "smooth" }}
          >
            <GridItem w="100%" bg="lavendar.200">
              <Flex
                p="10px"
                flexDirection="column"
                cursor="pointer"
                as="a"
                href="/book"
              >
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
                  <StatNumber>$50.00</StatNumber>
                  <StatHelpText>30 minutes</StatHelpText>
                </Stat>
                <Text>
                  The Swedish massage is one of the most common types of
                  massages you can get. It is performed to energize the body and
                  improve overall health. This type of massage involves actions
                  like percussion, kneading, vibration, tapping and rolling.
                  Massage oil or lotion is used to protect the skin from
                  friction.
                </Text>
                <ReviewSnippet review={reviews[0]} />
                <ReviewSnippet review={reviews[1]} />
                <ActiveButton />
              </Flex>
            </GridItem>
            <GridItem w="100%" h="100vh" bg="lavendar.300">
              <Flex
                p="10px"
                flexDirection="column"
                cursor="pointer"
                as="a"
                href="/book"
              >
                <Heading
                  as="h2"
                  size="2xl"
                  color="white"
                  textAlign="center"
                  p="5px"
                >
                  Thai Massage
                </Heading>
                <Stat textAlign="center">
                  <StatNumber>$120.00</StatNumber>
                  <StatHelpText>1 hour</StatHelpText>
                </Stat>
                <Text>
                  Thai massage is a form of therapeutic touch that differs in
                  many ways from traditional massage. Instead of a massage
                  table, you lie on a mat on the floor while the provider
                  manipulates your body in certain ways to stimulate organs and
                  improve flexibility. Thai massage is part of traditional Thai
                  medicine, and like most eastern treatments, it works with the
                  body's energetic pathways.
                </Text>
                <ReviewSnippet review={reviews[2]} />
                <ActiveButton />
              </Flex>
            </GridItem>
            <GridItem w="100%" h="100vh" bg="lavendar.100">
              <Flex
                p="10px"
                flexDirection="column"
                cursor="pointer"
                as="a"
                href="/book"
              >
                <Heading
                  as="h2"
                  size="2xl"
                  color="white"
                  textAlign="center"
                  p="5px"
                >
                  Hot Stone Massage
                </Heading>
                <Stat textAlign="center">
                  <StatNumber>$150.00</StatNumber>
                  <StatHelpText>1 hour</StatHelpText>
                </Stat>
                <Text>
                  A hot stone massage is a type of massage in which the masseuse
                  places smooth, hot stones on your back. These stones provide
                  heat therapy to the muscles, which can help reduce tension and
                  pain. The stones used in hot stone massage are typically
                  basalt, volcanic rock that is usually high in iron, which
                  allows them to absorb heat. The placement of the stones during
                  a hot stone massage will depend on the muscles and tissues
                  that are being worked on.
                </Text>
                <ReviewSnippet review={reviews[3]} />
                <ActiveButton />
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
