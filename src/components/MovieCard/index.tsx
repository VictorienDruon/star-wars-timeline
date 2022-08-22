import { Box, Button, Image, HStack, Stack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { Movie } from "utils/movieList";
import { Section } from "../Section";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { poster, id } = movie;

  return (
    <Box position="relative" minHeight="100vh">
      <Box position="absolute" zIndex={1} w="full">
        <Section>
          <Stack maxW="4xl" spacing="10">
            <Image w="35vw" maxW="341px" minW="100px" src={poster} alt="Todo" />
            <HStack spacing="4">
              <Button size="lg">Lecture</Button>
              <Button size="lg" variant="outline">
                Bande-annonce
              </Button>
            </HStack>
            <Text>{}</Text>
          </Stack>
        </Section>
      </Box>
    </Box>
  );
};
