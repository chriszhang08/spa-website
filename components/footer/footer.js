import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LocationIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <Box as="footer" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justify="center" align="center">
          <Text>&copy; 2023 Your Business Name. All rights reserved.</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={EmailIcon} boxSize={6} color="gray.500" mr={2} />
          <Text>Email: info@example.com</Text>
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
    </Box>
  );
}

export default Footer;
