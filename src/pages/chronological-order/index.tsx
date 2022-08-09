import React, { useEffect } from "react";
import type { NextPage } from "next";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Section } from "src/components/Section";

const ChronologicalOrder: NextPage = () => {
  const contentContainerRef = React.useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = React.useState(1);

  const handleScroll = () => {
    const pageHeight = window.innerHeight;
    const contentHeight = contentContainerRef.current?.clientHeight;
    const scrollPosition = window.scrollY;

    const rawOpacity = 1 - scrollPosition / (contentHeight! - pageHeight);

    if (rawOpacity < 0.2) {
      setOpacity(0.2);
    } else {
      setOpacity(rawOpacity);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box minHeight="100vh" position="relative">
      <Box position="fixed" opacity={opacity} zIndex="0">
        <Image w="full" src="/phantom-menace.jpg" alt="Todo" />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="radial-gradient(farthest-side at 73% 21%, blackAlpha.400, gray.800)"
        />
      </Box>

      <Box ref={contentContainerRef} position="absolute" zIndex={1} w="full">
        <Section>
          <Stack maxW="4xl" spacing="10">
            <Image w="35vw" maxW="341px" minW="100px" src="/phantom-menace-title.png" alt="Todo" />
            <HStack spacing="4">
              <Button size="lg">Lecture</Button>
              <Button size="lg" variant="outline">
                Bande-annonce
              </Button>
            </HStack>
            <Text>
              {`Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy
            from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the
            mysterious Darth Vader.`}
            </Text>
          </Stack>
        </Section>
      </Box>
    </Box>
  );
};
export default ChronologicalOrder;
