import { Button, Center, Link, Text } from "@chakra-ui/react";
import { emailAddress } from "../../config";
import { openInNewTab } from "../Header/Link";

export default function Next(): JSX.Element {
  return (
    <Center p={{ xl: "2rem 0 9.5rem" }} flexDir="column">
      <Text
        textStyle="code"
        textColor="brand.cottonCandy"
        fontSize="1rem"
        fontWeight="600"
      >
        04. What&apos;s Next?
      </Text>
      <Text fontWeight="800" fontSize="3.5rem">
        Get In Touch
      </Text>
      <Text maxW="26rem" textAlign="center" textColor="brand.powderBlue">
        My inbox is always open in case you&apos;ve got anything to say. Also, I
        am actively looking for work.
      </Text>
      <Button
        variant="main"
        m="4rem 0"
        size="lg"
        onClick={() => openInNewTab(`mailto: ${emailAddress}`)}
      >
        Say Hi
      </Button>

      <Text textStyle="code" mt="4rem">
        Inspired by{" "}
        <Link
          cursor="ne-resize"
          onClick={() => openInNewTab("https://brittanychiang.com")}
        >
          https://brittanychiang.com
        </Link>
      </Text>
    </Center>
  );
}
