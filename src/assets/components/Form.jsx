import React from "react";
import * as Form from "@radix-ui/react-form";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";

function FormMain() {
  return (
    <Form.Root style={{ width: "100%" }}>
      <Flex gap="3" direction="column">
        <Flex gap="4">
          <Form.Field name="email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: "4px",
                marginLeft: "2px",
              }}
            >
              <Form.Label>
                <Text weight="light" size="2">
                  First Name{" "}
                </Text>
              </Form.Label>
              {/* <Form.Message match="valueMissing">
              <Text size="1" color="gray">
                {" "}
                Please enter your email
              </Text>
            </Form.Message>
            <Form.Message match="typeMismatch">
              <Text size="1" color="gray">
                Please provide a valid email
              </Text>
            </Form.Message> */}
            </div>{" "}
            <Form.Control asChild>
              <TextField.Root
                placeholder="Enter Your Email"
                type="email"
                required
              ></TextField.Root>
            </Form.Control>
          </Form.Field>
          {/* hello */}
          <Form.Field name="email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: "4px",
                marginLeft: "2px",
              }}
            >
              <Form.Label>
                <Text weight="light" size="2">
                  Last Name
                </Text>
              </Form.Label>
              {/* <Form.Message match="valueMissing">
              <Text size="1" color="gray">
                {" "}
                Please enter your email
              </Text>
            </Form.Message>
            <Form.Message match="typeMismatch">
              <Text size="1" color="gray">
                Please provide a valid email
              </Text>
            </Form.Message> */}
            </div>{" "}
            <Form.Control asChild>
              <TextField.Root
                placeholder="Enter Your Email"
                type="email"
                required
              ></TextField.Root>
            </Form.Control>
          </Form.Field>
        </Flex>

        {/* hello2 */}
        <Form.Field name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "4px",
              marginLeft: "2px",
            }}
          >
            <Form.Label>
              <Text weight="light" size="2">
                Email
              </Text>
            </Form.Label>
          </div>{" "}
          <Form.Control asChild>
            <TextField.Root
              placeholder="Enter Your Email"
              type="email"
              required
            ></TextField.Root>
          </Form.Control>
        </Form.Field>

        {/* hello3 */}
        <Form.Field name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "4px",
              marginLeft: "2px",
            }}
          >
            <Form.Label>
              <Text weight="light" size="2">
                Password
              </Text>
            </Form.Label>
          </div>{" "}
          <Form.Control asChild>
            <TextField.Root
              placeholder="Enter Your Email"
              type="password"
              required
            ></TextField.Root>
          </Form.Control>
        </Form.Field>
        <Form.Field name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "4px",
              marginLeft: "2px",
            }}
          >
            <Form.Label>
              <Text weight="light" size="2">
                Confirm Password
              </Text>
            </Form.Label>
          </div>{" "}
          <Form.Control asChild>
            <TextField.Root
              placeholder="Enter Your Email"
              type="password"
              required
            ></TextField.Root>
          </Form.Control>
        </Form.Field>
        <Button variant="solid" color="gray" highContrast>
          <Form.Submit asChild>
            <Text weight="light" size="2">
              Dive In
            </Text>
          </Form.Submit>
        </Button>
      </Flex>
    </Form.Root>
  );
}

export default FormMain;
