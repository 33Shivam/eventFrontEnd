import React from "react";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Badge from "../3DComponents/badge";
import "./LoggedIN.css";
import Circle from "./circle";
import Typewriter from "typewriter-effect";
import Background from "../../background";
import DistrotableSphere from "./DistrotableSphere";

function loggedIN() {
  const characterNumber = 1000;
  const subParagraph =
    "As the celestial symphony orchestrates its cosmic ballet, your luminous affirmation ignites a radiant convergence of shared aspirations, weaving intricate patterns across the boundless expanse of existence. With each cosmic thread you weave, our celestial tapestry grows richer, adorned with the brilliance of your essence. Thank you for casting your cosmic glow upon our gathering, becoming an integral part of the grand cosmic narrative we collectively compose with each passing moment.In the whispering shadows of Bangalore's enigmatic skyline lies a clandestine haven known only to the select few—a sanctuary of opulence veiled in mystery and allure. It is with the utmost discretion and reverence that we extend to you a covert invitation to rendezvous with us at the elusive Zurian House on the clandestine afternoon of March 24th, 2024, precisely at the bewitching hour of 16:00.";

  return (
    <>
      {/* <div className="backgorundImage">
        <Background />
      </div> */}
      <Flex
        justify="between"
        align="center"
        minHeight="85vh"
        style={{ backgroundColor: "black", borderRadius: "16px" }}
      >
        <Box
          style={{
            height: "90vh",
            width: "100vw",
            top: "0px",
            zIndex: "2",
            borderRadius: "16px",
          }}
        >
          <Badge />
        </Box>
        <Flex
          align="center"
          direction="column"
          minHeight="100%"
          maxWidth="40vw"
          gap="4"
          style={{ paddingRight: "16px" }}
        >
          <Text size="2" color="gray">
            Hola Shivam,
          </Text>
          <Text size="2" color="gray">
            Onboarding the Cosmic
          </Text>
          <Text size="2" color="gray" align="center">
            {subParagraph}
          </Text>
          <DistrotableSphere />

          <Text size="2" color="gray">
            See You Soon ?
          </Text>
        </Flex>

        {/* 
        <Flex
          direction="column"
          justify="center"
          maxWidth="35%"
          align="end"
          gap="6"
          style={{ paddingRight: "32px" }}
        >
          <div class="circle1"></div>
          <Text size="7" weight="light" align="right">
            COSMOS REFLECTS ITS <br />
            GRATITUDE
          </Text>

          <Text size="2" weight="light" align="right" color="gray">
            As the celestial symphony orchestrates its cosmic ballet, your
            luminous affirmation ignites a radiant convergence of shared
            aspirations, weaving intricate patterns across the boundless expanse
            of existence. With each cosmic thread you weave, our celestial
            tapestry grows richer, adorned with the brilliance of your essence.
            Thank you for casting your cosmic glow upon our gathering, becoming
            an integral part of the grand cosmic narrative we collectively
            compose with each passing moment.
          </Text>
        </Flex> */}
      </Flex>
    </>
  );
}

export default loggedIN;
