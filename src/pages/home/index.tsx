import React from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Stack, Box, Heading, HStack } from "@chakra-ui/react";
import { Section } from "src/components/Section";

const Home: NextPage = () => {
  return (
    <Box minHeight="100vh">
      <Section>
        <Stack spacing="16">
          <NextLink href="/chronological-order">Chrnological Order</NextLink>
          <NextLink href="/release-order">Release Order</NextLink>
          <NextLink href="/machete-order">Machete Order</NextLink>
        </Stack>
      </Section>
    </Box>
  );
};
export default Home;
