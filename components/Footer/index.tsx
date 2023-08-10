import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { emailAddress, githubURI, linkedInURI, twitterURI } from "../../config";
import { openInNewTab } from "../Header/Link";
import Icon from "./Icon";

function VerticalLine() {
  return <Box w="1px" height="5rem" bg="white" mt="2rem" />;
}

export default function Footer(): JSX.Element {
  return (
    <Box p={{ lg: "0 3rem", xl: "0 4rem" }}>
      <Flex
        flexDir="column"
        align="center"
        pos="fixed"
        bottom="0"
        zIndex={10}
        display={{ base: "none", lg: "flex" }}
      >
        <Icon icon={<FiGithub size={24} />} url={githubURI as string} />
        <Icon icon={<FiTwitter size={24} />} url={twitterURI as string} />
        <Icon icon={<FiLinkedin size={24} />} url={linkedInURI as string} />
        <VerticalLine />
      </Flex>

      <Flex
        flexDir="column"
        align="center"
        justify="flex-end"
        pos="fixed"
        bottom="0"
        right={{ lg: -5, xl: 0 }}
        zIndex={10}
        display={{ base: "none", lg: "flex" }}
      >
        <Text
          transform="rotateZ(90deg) translateX(-4rem)"
          _hover={{
            transform: "rotateZ(90deg) translateX(-4.2rem)",
            color: "brand.cottonCandy",
          }}
          cursor="pointer"
          textStyle="code"
          onClick={() => openInNewTab(`mailto: ${emailAddress}`)}
        >
          {emailAddress}
        </Text>

        <VerticalLine />
      </Flex>

      <Center display={{ base: "flex", lg: "none" }} p="2rem 0">
        <Icon icon={<FiGithub size={24} />} url={githubURI as string} />
        <Icon icon={<FiTwitter size={24} />} url={twitterURI as string} />
        <Icon icon={<FiLinkedin size={24} />} url={linkedInURI as string} />
      </Center>
    </Box>
  );
}
