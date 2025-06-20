import { Flex, Heading } from "@radix-ui/themes";

import Link from "next/link";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <Flex
      direction="column"
      gap="9"
      align="center"
      justify="center"
      p={{
        initial: "2",
        sm: "5",
      }}
    >
      <Flex direction="column" align="center">
        <Link href="/" className={styles.logo_link}>
          <Heading
            size={{
              initial: "7",
              sm: "9",
            }}
            align="center"
          >
            BBEG
          </Heading>
        </Link>
        <Heading
          size={{
            initial: "4",
            sm: "6",
          }}
          style={{ fontWeight: "normal" }}
          align="center"
        >
          Villainous Creator Collective
        </Heading>
      </Flex>
    </Flex>
  );
}
