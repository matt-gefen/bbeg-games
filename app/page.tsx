import { Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import styles from "./page.module.css";
import { NavBar } from "./ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar />
        <Flex direction="column" gap="9" align="center" justify="center" p="5">
          <Flex direction="column" align="center" className={styles.logo_font}>
            <Heading size="9">Big Bad Evil Guys</Heading>
            <Text size="8" color="crimson">
              Villainous Creator Collective
            </Text>
          </Flex>
          <Flex direction="row" align="center" gap="4">
            <Text size="7" color="crimson">
              Hold for Content
            </Text>
            <Spinner size="3"/>
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
