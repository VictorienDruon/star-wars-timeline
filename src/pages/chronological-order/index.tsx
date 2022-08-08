import React from "react";
import type { NextPage } from "next";
import { Stack, Box, Heading, Image } from "@chakra-ui/react";
import { Section } from "src/components/Section";

const ChronologicalOrder: NextPage = () => {
  return (
    // <Box
    //   minHeight="100vh"
    //   width="100vw"
    //   bg="gray.800"
    //   bgGradient="linear(to-bl, rgba(26, 32, 44, 0.2), rgba(26, 32, 44, 0.8)), url('/phantom-menace.jpg')"
    //   bgPosition="top"
    //   bgRepeat="no-repeat"
    //   bgSize="contain"
    // >
    //   <Section>
    //     <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
    //   </Section>
    // </Box>

    <Box minHeight="100vh" bg="gray.800" position="relative">
      <Image w="full" src="/phantom-menace.jpg" alt="Todo" />
      <Section zIndex={1} position="fixed" top="0" left="0">
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
        <Image h="52" src="/phantom-menace-title.png" alt="Todo" />
      </Section>
    </Box>
  );
};
export default ChronologicalOrder;
