"use client";
import { Flex } from "@radix-ui/themes";
// import styles from "./index.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex direction="row" gap="3" align="start" p="2">
      <Link href="/" style={{ textDecoration: "none" }}>
        {/* <Text
          size={{
            initial: "6",
            sm: "7",
          }}
          align="center"
          className={styles.logo}
        >
          BBEG
        </Text> */}
      </Link>
    </Flex>
  );
}
