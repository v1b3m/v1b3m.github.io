import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { useWindowSize } from "../../hooks/useWindowSize";

interface LanguageProps {
  language: string;
}

function Language({ language }: LanguageProps) {
  return (
    <Flex align="center" color="brand.cottonCandy">
      <TiArrowRightOutline />{" "}
      <Text textStyle="code" textColor="white" ml="0.5rem">
        {language}
      </Text>
    </Flex>
  );
}

export default function About(): JSX.Element {
  const [mouseOverImage, setMouseOverImage] = useState(false);
  const [avi, setAvi] = useState({ height: 0, width: 0 });
  const { width } = useWindowSize();

  useEffect(() => {
    const Avi = document.getElementById("avi");
    setAvi({ height: Avi?.offsetHeight || 0, width: Avi?.offsetWidth || 0 });
  }, [width]);

  return (
    <Box
      p={{
        base: "9.5rem 2.125rem",
        md: "9.5rem 4.125rem",
        lg: "9.5rem 8.125rem",
        xl: "9.5rem 10.125rem",
        "2xl": "9.5rem 14.125rem",
      }}
      textColor="brand.honeyDew"
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1.3fr 1fr" }}
        marginLeft={{ xl: "2rem", "2xl": "3rem" }}
      >
        <Box>
          <Grid
            m="1rem 0"
            templateColumns={{
              base: "1fr 0.3fr",
              sm: "1fr 1.1fr",
              md: "1.2fr 2fr",
              lg: "1.2fr 1.4fr",
              xl: "1.2fr 2fr",
            }}
            alignItems="center"
          >
            <Box>
              <Text display="inline" textStyle="sectionHeaderNumber">
                01.{" "}
              </Text>
              <Text
                display="inline"
                textStyle="sectionHeader"
                textColor="white"
              >
                About Me
              </Text>
            </Box>
            <Box w="100%">
              <hr />
            </Box>
          </Grid>

          <Text textStyle="normal" m="1rem 0">
            Hey! My name is Benjamin Mayanja (I usually go by vibem though). I
            started out tinkering with software as a freshman at the university
            and I never looked back. Turns out software is what I am good at(If
            there&apos;s other stuff, I&apos;ve not yet discovered it)
          </Text>

          {/* TO DO:  Motypes should be a link */}
          <Text textStyle="normal" m="1rem 0" display="inline">
            I&apos;ve built a number of websites, applications and backends for
            both serious and trivial projects. I currently work at GitStart
            where we are building a lot of amazing stuff.
          </Text>

          <Text textStyle="normal" m="1rem 0">
            Below are some of the technologies I&apos;ve been working with
            lately:
          </Text>

          <Box textStyle="code">
            <Grid templateColumns="repeat(2,1fr)">
              <Box>
                <Language language="TypeScript" />
                <Language language="React" />
                <Language language="Node.js" />
              </Box>
              <Box>
                <Language language="GCP" />
                <Language language="React Native" />
                <Language language="JavaScript (ES6+)" />
              </Box>
            </Grid>
          </Box>
        </Box>

        <Box
          paddingLeft="2rem"
          m="8rem 0"
          display={{ base: "flex", lg: "block" }}
          alignItems="center"
          justifyContent="center"
        >
          <Box pos="relative">
            <Image
              id="avi"
              src="/images/IMG_2791.jpg"
              width="300"
              height="300"
              alt="a photo of myself"
              borderRadius="0.4rem"
              filter="hue-rotate(290deg)"
              _hover={{ filter: "none" }}
              pos="relative"
              zIndex="2"
              onMouseEnter={() => setMouseOverImage(true)}
              onMouseLeave={() => setMouseOverImage(false)}
            />
            <Box
              pos="absolute"
              height={{ base: avi.height, sm: 300 }}
              width={{ base: avi.width, sm: 300 }}
              top={"1.5rem"}
              left={{ base: "1.5rem", sm: "2.5rem" }}
              borderColor="brand.cottonCandy"
              borderWidth="2px"
              borderRadius="0.4rem"
              zIndex="1"
              _hover={{ top: "1rem" }}
              transform={
                mouseOverImage
                  ? "translateX(-0.5rem) translateY(-0.5rem)"
                  : "none"
              }
              transition="transform 0.4s"
            />
          </Box>
        </Box>
        <div id="experiences" />
      </Grid>
    </Box>
  );
}
