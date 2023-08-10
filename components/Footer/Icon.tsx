import { Box } from "@chakra-ui/react";
import { openInNewTab } from "../Header/Link";

interface IconProps {
  icon: JSX.Element;
  url: string;
}

export default function Icon({ icon, url }: IconProps): JSX.Element {
  return (
    <Box
      m={{ base: "0 1rem", lg: "1rem 0" }}
      _hover={{ color: "brand.cottonCandy", transform: "translateY(-0.2rem)" }}
      cursor="ne-resize"
      onClick={() => openInNewTab(url)}
    >
      {icon}
    </Box>
  );
}
