import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    cottonCandy: "#FFC8FB",
    honeyDew: "#f1faee",
    powderBlue: "#a8dadc",
    celadonBlue: "#457b9d",
    prussianBlue: "#1d3557",
    yInMbBlue: "#2A4C7D",
  },
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
  components: {
    Button: {
      variants: {
        main: () => ({
          borderWidth: "1px",
          textColor: "brand.cottonCandy",
          borderColor: "brand.cottonCandy",
          _hover: {
            borderColor: "brand.powderBlue",
            textColor: "brand.powderBlue",
          },
        }),
      },
    },
  },
  textStyles: {
    sectionHeader: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    sectionHeaderNumber: {
      fontSize: "1.5rem",
      textColor: "brand.cottonCandy",
    },
    normal: {
      fontSize: "1.1rem",
    },
    code: {
      fontFamily: "Fira Code",
      fontSize: "0.9rem",
    },
    link: {
      textColor: "brand.cottonCandy",
      cursor: "ne-resize",
      position: "relative",
      _after: {
        content: "''",
        position: "absolute",
        width: 0,
        height: "0.063rem",
        display: "block",
        marginTop: "-0.313rem",
        right: 0,
        background: "#ffc8fb",
        transition: "width 0.2s ease",
      },
      _hover: { _after: { width: "100%", left: 0 } },
    },
    workTitle: {
      fontWeight: 500,
      display: "inline",
      fontSize: "1.5rem",
      mr: "0.5rem",
    },
    builtTitle: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
  },
});

export default theme;
