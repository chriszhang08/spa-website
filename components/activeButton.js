import { useRouter } from "next/navigation";
import { Box } from "@chakra-ui/react";
import styles from "../app/page.module.css";

function ActiveButton({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const selectedOption = "Swedish";
    router.push("/book?selectedOption=Swedish");
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
