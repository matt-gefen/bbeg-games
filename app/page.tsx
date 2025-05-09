import { Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import styles from "./page.module.css";
import { NavBar } from "./ui";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <Flex
          direction="column"
          gap="9"
          align="center"
          justify="center"
          p={{
            initial: "2",
            md: "5",
          }}
        >
          <Flex direction="column" align="center" className={styles.logo_font}>
            <Heading size="9" align="center">Big Bad Evil Guys</Heading>
            <Text size="8" style={{ color: "var(--ruby-9)" }} align="center">
              Villainous Creator Collective
            </Text>
          </Flex>
          <Flex direction="row" align="center" gap="4" p="5">
            <Spinner size="3" />
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
