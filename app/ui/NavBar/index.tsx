import { Flex, Text } from "@radix-ui/themes";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <Flex direction="row" gap="3" align="start" p="3">
      <Text className={styles.logo} size="9">BBEG</Text>
    </Flex>
  );
}
