import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const Section = ({ children, ...rest }: BoxProps) => {
  return (
    <Box as="section" py={{ base: "8", md: "12", lg: "16" }}>
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }} {...rest}>
        {children}
      </Box>
    </Box>
  );
};
