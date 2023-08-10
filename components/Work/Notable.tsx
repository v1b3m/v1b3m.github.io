import { Flex, Text, Box } from "@chakra-ui/react";
import { TiArrowRightOutline } from "react-icons/ti";

interface NotableProps {
  text: string;
}

export default function Notable({ text }: NotableProps): JSX.Element {
  return (
    <Flex color="brand.cottonCandy">
      <Box paddingTop="4px">
        <TiArrowRightOutline />{" "}
      </Box>
      <Text textStyle="normal" textColor="white" ml="0.5rem">
        {text}
      </Text>
    </Flex>
  );
}
