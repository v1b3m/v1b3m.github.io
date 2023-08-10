import { Box } from "@chakra-ui/react";
import Head from "next/head";
import About from "../components/About";
import Built from "../components/Built";
import Layout from "../components/Layout";
import Next from "../components/Next";
import Page1 from "../components/Page1";
import Work from "../components/Work";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Box color="white" fontFamily="Roboto" pos="relative" zIndex={1}>
        <Head>
          <title>
            Full-Stack Developer | Benjamin Mayanja | TypeScript, Node.js,
            React, React-Native, Google Cloud, Firebase
          </title>
          <meta
            name="description"
            content="Benjamin Mayanja is a talented Software engineer proficient in all phases of the Software development lifecycle. View their portfolio to learn more about their work."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Page1 />
        <About />
        <Work />
        <Built startIndex={0} endIndex={3} />
        <Next />
      </Box>
    </Layout>
  );
}
