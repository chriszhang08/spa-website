import { useRouter } from "next/navigation";
import { Box } from "@chakra-ui/react";
import styles from "../app/page.module.css";

function ActiveButton({ service }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/book?service=${service}`);
  };

  return (
    <Box
      cursor="pointer"
      alignSelf="center"
      marginY="10%"
      onClick={handleClick}
      className={styles.card}
    >
      <h2>
        Book Now <span>-&gt;</span>
      </h2>
    </Box>
  );
}

export default ActiveButton;
