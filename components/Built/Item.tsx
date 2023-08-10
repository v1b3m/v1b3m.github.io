import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";
import { openInNewTab } from "../Header/Link";

export interface ItemProps {
  height: number;
  link: string;
  imgSrc: string;
  title: string;
  description: () => ReactNode;
  tags: string[];
  isOdd?: boolean;
}

const Item = ({
  height,
  link,
  imgSrc,
  title,
  description,
  tags,
  isOdd,
}: ItemProps): JSX.Element => {
  const position = { [isOdd ? "left" : "right"]: 0 };

  const templateColumns = isOdd
    ? { lg: "1.2fr 1fr", xl: "1fr 1.2fr" }
    : { lg: "1fr 1.2fr", xl: "1.2fr 1fr" };
  const items = [
    <Box key="screenshot">
      <Image
        id="screenshot"
        cursor="ne-resize"
        src={imgSrc}
        width={{ lg: "579" }}
        height={{ md: "361" }}
        alt="Lusa snapshot"
        filter="hue-rotate(290deg)"
        _hover={{ filter: "none" }}
        borderRadius="0.4rem"
        pos="absolute"
        top="0"
        bottom="0"
        {...position}
        display={{ base: "none", lg: "block" }}
        onClick={() => openInNewTab(link)}
        zIndex={9}
      />
      <Image
        id="screenshot"
        cursor="ne-resize"
        src={imgSrc}
        width="100%"
        height="100%"
        alt="Lusa snapshot"
        filter="hue-rotate(290deg)"
        _hover={{ filter: "none" }}
        borderRadius="0.4rem"
        pos="absolute"
        top="0"
        bottom="0"
        {...position}
        display={{ base: "block", lg: "none" }}
        fit="cover"
        opacity="0.1"
      />
    </Box>,
    <Box
      key="details"
      pos="relative"
      textAlign={{ base: "left", lg: isOdd ? "right" : "left" }}
      filter={{ base: "hue-rotate(290deg)", lg: "none" }}
      _hover={{ filter: "none" }}
      cursor={{ base: "ne-resize", lg: "inherit" }}
      onClick={() => openInNewTab(link)}
      zIndex={10}
    >
      <Text textStyle="code" textColor="brand.cottonCandy">
        Featured Project
      </Text>
      <Text textStyle="builtTitle">{title}</Text>
      <Text
        textStyle="normal"
        m="1rem 0"
        bg="brand.yInMbBlue"
        p="1rem"
        borderRadius="0.4rem"
        textColor="brand.honeyDew"
      >
        {description()}
      </Text>
      <Box textStyle="code" m="1rem 0" textColor="brand.honeyDew">
        {tags.map((tag) => (
          <Text display="inline" m="0 0.5rem" key={tag}>
            {tag}
          </Text>
        ))}
      </Box>
      <Flex justify="flex-end">
        <Box cursor="ne-resize" _hover={{ color: "brand.cottonCandy" }}>
          <FiExternalLink size={24} />
        </Box>
      </Flex>
    </Box>,
  ];

  return (
    <Grid
      templateColumns={templateColumns}
      alignItems="center"
      pos="relative"
      minH={height}
      mb="2rem"
      className="module"
    >
      {(isOdd ? items : items.slice().reverse()).map((item) => item)}
    </Grid>
  );
};

export default Item;
