import { Card, Flex, Text, Link } from "@radix-ui/themes";
import React from "react";
import Globe from "../3DComponents/Globe";
import Form from "./Form";
import Background from "../../background";

function register() {
  return (
    <>
      <Background />
      <Flex justify="between" style={{ backgroundColor: "transparent" }}>
        <Flex
          justify="center"
          align="center"
          width="100%"
          style={{ backgroundColor: "transparent" }}
        >
          <Card style={{ margin: "32px" }}>
            <Flex
              style={{ padding: "24px" }}
              width="100%"
              justify="center"
              align="center"
              direction="column"
              gap="3"
            >
              <Text size="6" weight="light">
                EMBARK THE JOURNEY
              </Text>
              <Text size="2" weight="light" color="gray">
                Illuminate us with the tapestry of your being
              </Text>
              <Form />

              <Link href="#">
                {" "}
                <Text size="2" weight="light" color="gray">
                  {" "}
                  Already Registered?
                </Text>
              </Link>
            </Flex>
          </Card>
        </Flex>

        <Flex>
          <Globe />
        </Flex>
      </Flex>
    </>
  );
}

export default register;
