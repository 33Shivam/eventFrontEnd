import React from "react";
import { Flex, Section, Container, Button, Text } from "@radix-ui/themes";
import Logo from "/logo.svg";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function navbar() {
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/loggedIN");
  };
  const handleNavigateRegistration = () => {
    navigate("/registration");
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <Flex className="navbarMain" justify="between" align="center">
      <img src={Logo} onClick={handleNavigateHome} />
      <Flex
        gap="4"
        style={{ display: window.innerWidth < 600 ? "none" : "flex" }}
      >
        <Button variant="outline">
          <Text weight="light" size="1">
            HOW IT WORKS?
          </Text>
        </Button>
        <Button variant="outline">
          <Text weight="light" size="1">
            {" "}
            TOKEN REWARDS
          </Text>
        </Button>
        <Button variant="outline">
          <Text weight="light" size="1">
            WHO ARE WE?
          </Text>
        </Button>
        <Button variant="outline">
          <Text weight="light" size="1">
            EVENT DETAILS
          </Text>
        </Button>
      </Flex>

      <Flex gap="4" align="center">
        <Button variant="ghost" onClick={handleNavigateLogin}>
          <Text weight="light" size="1">
            VIEW BADGE
          </Text>
        </Button>
        <Button
          variant="solid"
          color="gray"
          highContrast
          onClick={handleNavigateRegistration}
        >
          <Text weight="light" size="1">
            REGISTER
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

const navButtons = ["Home", "About", "Contact", "Blog"];

export default navbar;
