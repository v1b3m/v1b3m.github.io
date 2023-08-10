import { Box, Center, Grid } from "@chakra-ui/react";
import Links from "./Links";

interface NavModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export default function NavModal({
  visible,
  setVisible,
}: NavModalProps): JSX.Element {
  return (
    <Grid
      pos="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      zIndex={90}
      templateColumns={{ base: "1fr 2.5fr", md: "repeat(2, 1fr)" }}
      transform={{
        base: visible ? "translateX(0)" : "translateX(100%)",
        lg: "translateX(100%)",
      }}
      transition="transform 0.5s ease"
    >
      <Box
        background="rgba(29, 53, 87, .25)"
        backdropFilter="blur(4px)"
        onClick={() => setVisible(false)}
      />
      <Center flexDir="column" bg="brand.prussianBlue">
        <Links setNavModalShowing={setVisible} />
      </Center>
    </Grid>
  );
}
