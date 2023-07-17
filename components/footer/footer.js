import React from "react";
import { Box, Text, Flex, Icon, Stack } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LocationIcon } from "@chakra-ui/icons";

// create menuitems component
const MenuItem = ({ children, isLast, to = "/" }) => {
  return (
    <Flex justifyContent="flex-end">
      <a href={to}>
        <Text display="flex" _hover={{ color: "#000000" }} color="#ffffff">
          {children}
        </Text>
      </a>
    </Flex>
  );
};

// create menulinks component
const MenuLinks = ({ children, isLast, ...rest }) => {
  return (
    <Box display={{ md: "block" }}>
      <Stack
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={"column"}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/book">Book Now</MenuItem>
        <MenuItem to="/bio">Why Us</MenuItem>
      </Stack>
    </Box>
  );
};

// TODO change footer to grid

function Footer() {
  return (
    <Flex
      as="footer"
      p={4}
      px={10}
      color="white"
      direction="row"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        direction="column"
      >
        <Flex alignItems="center">
          <Icon as={EmailIcon} boxSize={6} color="gray.500" mr={2} />
          <Text>Email: booking@lakeshoremassages.com</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={PhoneIcon} boxSize={6} color="gray.500" mr={2} />
          <Text>Phone: +1 123-456-7890</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={LocationIcon} boxSize={6} color="gray.500" mr={2} />
          <Text>123 Main St, City, State, ZIP</Text>
        </Flex>
      </Flex>
      <Flex justify="center" alignSelf="end">
        <Text>&copy; 2023 Lakeshore Massages. All rights reserved.</Text>
      </Flex>
      <MenuLinks />
    </Flex>
  );
}

export default Footer;
