"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <Flex direction="row" gap="3" align="start" p="2">
      <Text size="8" align="center" className={styles.logo}>
        BBEG
      </Text>
    </Flex>
  );
}
