import { Box, Button, Center, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Item, { ItemProps } from "./Item";
import { items as data } from "./data";
import Link from "next/link";
import $ from "jquery";

interface Props {
  startIndex?: number;
  endIndex?: number;
}

export default function Built({ startIndex, endIndex }: Props): JSX.Element {
  const [height, setHeight] = useState(0);
  const { width } = useWindowSize();
  const items: ItemProps[] = data
    .slice(startIndex, endIndex)
    .map((item, idx) => ({
      ...item,
      isOdd: idx % 2 === 0,
      height,
    }));
  const showNextProjectsButton = items.length < 4;

  useEffect(() => {
    const screenshot = document.getElementById("screenshot");
    setHeight(screenshot?.offsetHeight || 0);
  }, [width]);

  useEffect(() => {
    const isVisible = (el: JQuery<HTMLElement>): boolean => {
      const top_of_element = el.offset()?.top || 0;
      const bottom_of_element = top_of_element + (el.outerHeight() || 0);
      const bottom_of_screen =
        ($(window).scrollTop() || 0) + ($(window).innerHeight() || 0);
      const top_of_screen = $(window).scrollTop() || 0;
      return (
        bottom_of_screen > top_of_element && top_of_screen < bottom_of_element
      );
    };

    const win = $(window);
    const allMods = $(".module");

    allMods.each((i, el) => {
      const elem = $(el);
      if (isVisible(elem)) {
        elem.addClass("already-visible");
      }
    });

    win.on("scroll", () => {
      $(".module").each((_i, el) => {
        const elem = $(el);
        // check if item is in the viewport
        if (isVisible(elem)) {
          elem.addClass("come-in");
        }
      });
    });
  }, []);

  return (
    <Center flexDir="column">
      <Box
        p={{
          base: "9.5rem 2.125rem",
          md: "9.5rem 4.125rem",
          lg: "9.5rem 7.125rem",
          xl: "9.5rem 10rem",
          "2xl": "9.5rem 6.125rem",
        }}
        maxW="80rem"
        overflowX="hidden"
      >
        <Grid
          m="1rem 0 3rem"
          templateColumns={{
            base: "1fr 0",
            sm: "1fr 0.1fr",
            md: "1fr 0.5fr",
            lg: "1fr 0.8fr",
            xl: "1fr 1.5fr",
          }}
        >
          <Box>
            {showNextProjectsButton && (
              <Text display="inline" textStyle="sectionHeaderNumber">
                03.{" "}
              </Text>
            )}
            <Text display="inline" textStyle="sectionHeader">
              Some Things I’ve {showNextProjectsButton ? "Built" : "Worked on"}
            </Text>
          </Box>
          {showNextProjectsButton && (
            <Box>
              <hr />
            </Box>
          )}
        </Grid>

        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {showNextProjectsButton && (
          <Center>
            <Link href="/projects">
              <Button
                variant="main"
                m="4rem 0"
                size="lg"
                // onClick={() => openInNewTab(`mailto: ${emailAddress}`)}
              >
                View More Projects
              </Button>
            </Link>
          </Center>
        )}
      </Box>

      <div id="contact" />
    </Center>
  );
}
