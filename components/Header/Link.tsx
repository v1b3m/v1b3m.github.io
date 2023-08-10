import { Flex, Text } from "@chakra-ui/react";

interface LinkProps {
  index: number;
  text: string;
  url: string;
  setNavModalShowing: (value: boolean) => void;
}

export function openRelativeLink(url: string): void {
  window.location.href = `/${url.toLowerCase().replace(/ /g, "-")}`;
}

export function openInNewTab(url: string): void {
  window.open(url, "_blank")?.focus();
}

export default function Link({
  url,
  index,
  text,
  setNavModalShowing,
}: LinkProps): JSX.Element {
  return (
    <Flex
      alignItems="center"
      flexDir={{ base: "column", lg: "row" }}
      m={{ base: "1rem 0", lg: "0" }}
      onClick={() => {
        setNavModalShowing(false);
        openRelativeLink(url);
      }}
    >
      <Text display="inline" textColor="brand.cottonCandy">
        0{index}.
      </Text>{" "}
      <Text
        m={{ lg: "0 1rem" }}
        cursor="pointer"
        _hover={{ textColor: "brand.cottonCandy" }}
      >
        {text}
      </Text>
    </Flex>
  );
}
