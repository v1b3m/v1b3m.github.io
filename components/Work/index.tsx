/* eslint-disable indent */
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Content from "./Content";
import { useWindowSize } from "../../hooks/useWindowSize";

export type ActiveTab =
  | "motypes"
  | "matatu"
  | "yonja"
  | "freelance"
  | "gitstart"
  | "remotemore";

interface CustomButtonProps {
  tabName: ActiveTab;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  text: string;
}

function CustomButton({
  tabName,
  activeTab,
  text,
  setActiveTab,
}: CustomButtonProps) {
  return (
    <Text
      p="0.5rem 2rem"
      id={tabName}
      textStyle="code"
      textAlign={{ base: "center", md: "left" }}
      textColor={activeTab === tabName ? "brand.cottonCandy" : "inherit"}
      backgroundColor={activeTab === tabName ? "brand.yInMbBlue" : "inherit"}
      cursor="pointer"
      _hover={{
        textColor: "brand.cottonCandy",
        bg: "brand.yInMbBlue",
      }}
      onClick={() => {
        setActiveTab(tabName);
      }}
      minW={{ base: "10rem", md: "unset" }}
    >
      {text}
    </Text>
  );
}

function useButtonDimensions() {
  const { width } = useWindowSize();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const button = document.getElementById("motypes");
    setDimensions({
      height: button?.offsetHeight || 0,
      width: button?.offsetWidth || 0,
    });
  }, [width]);

  return dimensions;
}

export default function Work(): JSX.Element {
  const [activeTab, setActiveTab] = useState<ActiveTab>("gitstart");
  const { width } = useWindowSize();

  const { width: sliderWidth, height: sliderHeight } = useButtonDimensions();

  const getTransform = useCallback(() => {
    switch (activeTab) {
      case "gitstart":
        return width > 768 ? "translateY(0)" : "translateX(0)";
      case "remotemore":
        return width > 768
          ? `translateY(${sliderHeight}px)`
          : `translateX(${sliderWidth}px)`;
      case "motypes":
        return width > 768
          ? `translateY(${2 * sliderHeight}px)`
          : `translateX(${2 * sliderWidth}px)`;
      case "yonja":
        return width > 768
          ? `translateY(${3 * sliderHeight}px)`
          : `translateX(${3 * sliderWidth}px)`;
      case "matatu":
        return width > 768
          ? `translateY(${4 * sliderHeight}px)`
          : `translateX(${4 * sliderWidth}px)`;
      case "freelance":
        return width > 768
          ? `translateY(${5 * sliderHeight}px)`
          : `translateX(${5 * sliderWidth}px)`;
    }
  }, [activeTab, width]);

  const transform = getTransform();

  const tabToCompanyName: Record<ActiveTab, string> = {
    matatu: "Matatu Hub",
    yonja: "Yonja",
    motypes: "Motypes",
    freelance: "Freelance",
    gitstart: "GitStart",
    remotemore: "RemoteMore",
  };

  return (
    <Box
      p={{
        base: "9.5rem 2.125rem",
        md: "9.5rem 4.125rem",
        lg: "9.5rem 8.125rem 9.5rem 12rem",
        xl: "9.5rem 10.125rem 9.5rem 17rem",
        "2xl": "9.5rem 14.125rem 9.5rem 23.125rem",
      }}
    >
      <Grid
        m="1rem 0 3rem"
        templateColumns={{
          base: "1fr 0fr",
          sm: "2fr 0.5fr",
          md: "repeat(2, 1fr)",
          xl: "1fr 1.8fr",
        }}
        alignItems="center"
      >
        <Box>
          <Text display="inline" textStyle="sectionHeaderNumber">
            02.{" "}
          </Text>
          <Text display="inline" textStyle="sectionHeader">
            Where I&apos;ve worked
          </Text>
        </Box>
        <Box w={{ lg: "20rem", xl: "24rem" }}>
          <hr />
        </Box>
      </Grid>

      <Grid
        templateColumns={{ md: "1fr 3fr" }}
        minH="14rem"
        textColor="brand.honeyDew"
      >
        <Box
          pos="relative"
          overflowX="auto"
          h={{ base: "3.5rem", md: "unset" }}
          css={{
            "&::-webkit-scrollbar": {
              height: "0.4rem",
              backgroundColor: "#1d3557",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#457b9d",
            },
          }}
        >
          <Box
            pos="absolute"
            left="0"
            top="0"
            height={{ base: "2px", md: `${6 * sliderHeight}px` }}
            w={{ base: `${6 * sliderWidth}px`, md: "2px" }}
            backgroundColor="brand.powderBlue"
          />

          <Box
            pos="absolute"
            left="0"
            top="0"
            height={{ base: "2.5px", md: `${sliderHeight}px` }}
            w={{ base: `${sliderWidth}px`, md: "2.5px" }}
            backgroundColor="brand.cottonCandy"
            transition="transform 0.4s"
            transform={transform}
          />
          <Box>
            <Flex flexDir={{ md: "column" }}>
              <CustomButton
                tabName="gitstart"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                text={tabToCompanyName.gitstart}
              />

              <CustomButton
                tabName="remotemore"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                text={tabToCompanyName.remotemore}
              />

              <CustomButton
                tabName="motypes"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                text={tabToCompanyName.motypes}
              />

              <CustomButton
                tabName="yonja"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                text={tabToCompanyName.yonja}
              />

              <CustomButton
                tabName="matatu"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                text={tabToCompanyName.matatu}
              />

              <CustomButton
                tabName="freelance"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                text={tabToCompanyName.freelance}
              />
            </Flex>
          </Box>
        </Box>
        <Content activeTab={activeTab} company={tabToCompanyName[activeTab]} />
      </Grid>
      <div id="work" />
    </Box>
  );
}
