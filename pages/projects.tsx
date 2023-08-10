import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Built from "../components/Built";
import Layout from "../components/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Box color="white" fontFamily="Roboto" pos="relative" zIndex={1}>
        <Head>
          <title>v1b3m | Home</title>
          <meta
            name="description"
            content="I am a talented Software engineer proficient in all phases of the Software development lifecycle"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Built />
      </Box>
    </Layout>
  );
}
