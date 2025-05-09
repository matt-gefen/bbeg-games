"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <Flex direction="row" gap="3" align="start" p="2">
      <Button variant="ghost" asChild className={styles.logo}>
        <Flex direction="row" gap="3" align="center">
          <Text
            size="7"
            align="center"
          >
            BBEG
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}
