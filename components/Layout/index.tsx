import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavModal from "../Header/NavModal";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [navModalShowing, setNavModalShowing] = useState(false);

  return (
    <Box>
      <Box pos="relative" bg="brand.prussianBlue">
        <Header
          navModalShowing={navModalShowing}
          setNavModalShowing={setNavModalShowing}
        />
        {children}
        <Footer />
      </Box>
      <NavModal setVisible={setNavModalShowing} visible={navModalShowing} />
    </Box>
  );
}
