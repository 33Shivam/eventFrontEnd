import React from "react";
import { Section, Container, Flex, Box } from "@radix-ui/themes";
import "./social.css";
import {
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import randomizerStartOptions from "./utils/randomizerOptions";
import randomizerStartOptionsNums from "./utils/randomizerOptionsNums";
import convertToFourDigitNumber from "./utils/random";

function social() {
  const [isHovering, setIsHovering] = useState(true);
  const [currentHoveringID, setCurrentHoveringID] = useState();
  function handleMouseEnter(event) {
    console.log(event.target.id);
    console.log(convertToFourDigitNumber(event.target.id).toString());
    setCurrentHoveringID(event.target.id);
    setIsHovering(true);
  }

  function handleMouseLeave() {
    if (dynamic == true) {
      setIsHovering(false);
    }
  }

  useEffect(() => {
    console.log(isHovering, currentHoveringID);
    if (isHovering && document.getElementById(currentHoveringID)) {
      randomizerStartOptions(currentHoveringID);
      randomizerStartOptionsNums(currentHoveringID);
    } else {
      randomizerStartOptions("mainText");
      randomizerStartOptionsNums("mainNum");
    }
  }, [isHovering, currentHoveringID]);
  return (
    <Section className="main">
      <Container>
        <Flex justify="center" align="center" gap="4">
          <Flex
            className="box"
            data-value="LINK"
            id="Link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <LinkedInLogoIcon className="icon" />
          </Flex>
          <Flex
            className="box"
            data-value="NSTA"
            id="NSTA"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <InstagramLogoIcon className="icon" />
          </Flex>
          <Flex
            className="box"
            data-value="WEET"
            id="weet"
            data="weet"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <TwitterLogoIcon className="icon" />
          </Flex>
          <Flex
            className="box"
            data-value="CORD"
            id="cord"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <DiscordLogoIcon className="icon" />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

export default social;
