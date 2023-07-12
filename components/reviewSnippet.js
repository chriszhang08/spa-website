import { Box, Avatar, Text, Flex, Icon } from "@chakra-ui/react";
import { StarIcon, CheckCircleIcon } from "@chakra-ui/icons";

import styles from "../app/page.module.css";

const ReviewSnippet = ({ review }) => {
  const { name, rating, text, verified, externalLink } = review;
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" marginY="5%">
      <Flex alignItems="center" mb={2}>
        <Text fontWeight="bold" fontSize="lg" mr={2}>
          {name}
        </Text>
        <Flex alignItems="center" color="green.500" className={styles.verified}>
          <Icon as={CheckCircleIcon} boxSize={4} mr={1} />
          <a
            fontSize="sm"
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verified Review
          </a>
        </Flex>
      </Flex>
      <Box d="flex" alignItems="center" mb={2}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon key={i} color={i < rating ? "yellow.500" : "gray.300"} />
          ))}
      </Box>
      <Text>{text}</Text>
    </Box>
  );
};

export default ReviewSnippet;
