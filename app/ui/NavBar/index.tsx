"use client";
import { Flex, Text } from "@radix-ui/themes";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <Flex direction="row" gap="3" align="start" p="2">
      <Text
        size={{
          initial: "6",
          sm: "7",
        }}
        align="center"
        className={styles.logo}
      >
        BBEG
      </Text>
    </Flex>
  );
}
