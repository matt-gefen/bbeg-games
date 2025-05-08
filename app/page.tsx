/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Flex direction="column" gap="3" align="center">
          <Text size="7">Whats up</Text>
          <Text size="9">BIG BAD EVIL GUYS</Text>
          <Flex gap="2">
            <img
              src="https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/BBEG/bbeg-UARPud147dabpXiM5KLyrPgV8PLqlK.jpg"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 500,
              }}
            />
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
