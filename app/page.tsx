import { Flex, Heading, Spinner } from "@radix-ui/themes";
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
            sm: "5",
          }}
        >
          <Flex direction="column" align="center">
            <Heading
              size={{
                initial: "7",
                sm: "9",
              }}
              align="center"
            >
              BIG BAD EVIL GUYS
            </Heading>
            <Heading
              size={{
                initial: "6",
                sm: "8",
              }}
              style={{ color: "var(--accent-9)", fontWeight:"normal" }}
              align="center"
            >
              Villainous Creator Collective
            </Heading>
          </Flex>
          <Flex direction="row" align="center" gap="4" p="5">
            <Spinner size="3" />
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
