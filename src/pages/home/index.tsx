import React from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Stack, Box, Heading } from "@chakra-ui/react";
import { Section } from "src/components/Section";

const Home: NextPage = () => {
  return (
    <Box minHeight="100vh">
      <Section>
        <Stack spacing="16">
          <Heading>Home</Heading>
          <NextLink href="/chronological-order">Chrnological Order</NextLink>
          <NextLink href="/release-order">Release Order</NextLink>
          <NextLink href="/machete-order">Release Order</NextLink>
        </Stack>
      </Section>
    </Box>
  );
};
export default Home;
