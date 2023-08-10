import { Box, Button, Text } from "@chakra-ui/react";
import { openInNewTab } from "../Header/Link";
import { emailAddress } from "../../config";

export default function Page1(): JSX.Element {
  return (
    <Box
      p={{
        base: "9.5rem 2.125rem",
        md: "9.5rem 4.125rem",
        lg: "9.5rem 8.125rem",
        xl: "9.5rem 10.125rem",
        "2xl": "9.5rem 14.125rem",
      }}
    >
      <Text fontWeight="400" fontSize="1.2rem" textColor="brand.cottonCandy">
        Hi, I am
      </Text>

      <Text fontSize={{ base: "2rem", md: "3.5rem" }} fontWeight="600">
        Benjamin Mayanja.
      </Text>

      <Text
        fontSize={{ base: "2rem", md: "3.5rem" }}
        fontWeight="600"
        textColor="brand.powderBlue"
      >
        I build apps(web + mobile) and backends.
      </Text>

      <Text
        fontSize="1.1rem"
        textColor="brand.powderBlue"
        m="2rem 0 3rem"
        maxW="31.25rem"
      >
        I am a talented Software engineer proficient in all phases of the
        Software development lifecycle. I am adept at working with Agile and
        Scrum methodologies to accomplish project milestones according to
        specific time frames.
      </Text>

      <Button
        variant="main"
        size="lg"
        onClick={() => openInNewTab(`mailto: ${emailAddress}`)}
      >
        Reach Out
      </Button>
      <div id="about" />
    </Box>
  );
}
