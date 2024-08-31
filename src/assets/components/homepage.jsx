import React, { useEffect } from "react";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import BackgroundImg from "/back.png";
import "./homepage.css";
import { useRef, useState } from "react";
import Background from "../../background";
import Circle from "./circle";
import ConvertToFourDigitNumber from "./utils/random";
import randomizerStart from "./utils/randomizerStarter";
import randomizerStartOptions from "./utils/randomizerOptions";
import randomizerStartOptionsNums from "./utils/randomizerOptionsNums";
import Social from "./social";
import DistrotableSphere from "./DistrotableSphere";

function homepage() {
  const [element, setElement] = useState({});
  const [isHovering, setIsHovering] = useState(true);
  const [currentHoveringID, setCurrentHoveringID] = useState();
  function handleMouseEnter(event) {
    setCurrentHoveringID(event.target.id);
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
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

  const semiIntro =
    " Astronomers and stargazers alike are drawn to its luminous  presence, pondering the secrets it guards within its celestial embrace. With each passing orbit around its distant sun, CosmoNova9 unveils a new facet of its cosmic splendor, captivating observers with its ethereal beauty. From its shimmering surface to the depths of its cosmic core, it remains a mesmerizing focal point in the tapestry of the universe, a beacon of wonder that sparks the imagination of all who gaze upon it.";

  function onLoadElement() {
    console.log(currentHoveringID);
    setElement(document.getElementById("mainText"));
    randomizerStart("mainText");
    setElement(document.getElementById("mainNum"));
    randomizerStart("mainNum");
  }

  useEffect(() => {
    onLoadElement();
  }, []);

  return (
    <>
      <div className="backgorundImage">
        <img src={BackgroundImg} style={{ width: "60%", opacity: "0.4" }} />
        <Background />
      </div>
      <Flex className="homepage-flex">
        <Flex
          direction="column"
          style={{ marginLeft: "82px", marginTop: "8%" }}
          gap="9"
        >
          <Flex direction="column">
            <h1 className="mainHeadText" id="mainText" data-value="NOVA">
              NOVA
            </h1>
            <h1
              className="mainHeadText"
              id="mainNum"
              data-value={ConvertToFourDigitNumber("NOVA")}
            >
              {ConvertToFourDigitNumber("NOVA")}
            </h1>
          </Flex>
          <Flex direction="column" gap="5">
            <Heading size="6" weight="light" style={{ letterSpacing: "8px" }}>
              {" "}
              WELCOME TO A NEW VISIONARY WORLD
            </Heading>
            <Text style={{ letterSpacing: "4px" }} size="1">
              Amidst the symphony of life, let your heart's melody echo through
              the cosmos, painting constellations with your dreams.
            </Text>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          align="end"
          justify="end"
          gap="9"
          className="right-flex"
        >
          <Flex
            direction="column"
            gap="9"
            style={{ maxWidth: "50%", letterSpacing: "4px" }}
          >
            {/* <div className="circle" /> */}
            <Circle />
            <div style={{ width: "100%" }}>
              <Text style={{ letterSpacing: "2px" }} size="2">
                {semiIntro}
              </Text>
            </div>
          </Flex>
          <Flex
            direction="column"
            align="start"
            justify="start"
            width="50%"
            gap="3"
          >
            <ol style={{ width: "100%" }} className="selector">
              <Text className="selectionText" size="1">
                <li
                  className="listStyle"
                  data-value="Quan"
                  id="Quan"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  excitement mounts
                </li>
                <li
                  className="listStyle"
                  data-value="zeph"
                  id="zeph"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  collective buzz
                </li>
                <li
                  className="listStyle"
                  data-value="Xyzo"
                  id="Xyzo"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  shared thrill
                </li>
              </Text>
            </ol>
          </Flex>
        </Flex>
      </Flex>
      <Social />
    </>
  );
}

export default homepage;
