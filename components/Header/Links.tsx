import { Button, Flex } from "@chakra-ui/react";
import { resumeURI } from "../../config";
import Link, { openInNewTab } from "./Link";

interface LinksProps {
  setNavModalShowing: (value: boolean) => void;
}

export default function Links({ setNavModalShowing }: LinksProps): JSX.Element {
  return (
    <Flex align="center" flexDir={{ base: "column", lg: "row" }}>
      <Link
        index={1}
        text="About"
        url="#about"
        setNavModalShowing={setNavModalShowing}
      />
      <Link
        index={2}
        text="Experiences"
        url="#experiences"
        setNavModalShowing={setNavModalShowing}
      />
      <Link
        index={3}
        text="Work"
        url="#work"
        setNavModalShowing={setNavModalShowing}
      />
      <Link
        index={4}
        text="Contact"
        url="#contact"
        setNavModalShowing={setNavModalShowing}
      />
      <Button
        variant="main"
        m={{ base: "2rem 0", lg: 0 }}
        onClick={() => {
          setNavModalShowing(false);
          openInNewTab(resumeURI as string);
        }}
      >
        Résumé
      </Button>
    </Flex>
  );
}
