import { Box, Flex } from "@chakra-ui/react";
import { useHeader } from "../../hooks/useHeader";
import BurgerButton from "../BurgerButton";
import Links from "./Links";

interface HeaderProps {
  navModalShowing: boolean;
  setNavModalShowing: (value: boolean) => void;
}

export default function Header({
  navModalShowing,
  setNavModalShowing,
}: HeaderProps): JSX.Element {
  const { visible } = useHeader();

  return (
    <Flex
      justify="space-between"
      p={{
        base: "0.8rem 1.8rem",
        sm: "1.2rem 2rem",
        lg: "2rem 3rem",
        xl: "2rem 4rem",
      }}
      pos="fixed"
      w="100%"
      transform={visible ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.5s ease"
      boxShadow="0 3px 15px #122237"
      zIndex={100}
      background="rgba(29, 53, 87, .95)"
      backdropFilter="blur(4px)"
    >
      <Box />
      <Box display={{ base: "none", lg: "block" }}>
        <Links setNavModalShowing={setNavModalShowing} />
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        <BurgerButton
          color="#FFC8FB"
          navModalVisible={navModalShowing}
          handleClick={() => setNavModalShowing(!navModalShowing)}
        />
      </Box>
    </Flex>
  );
}
