import { Box, Button, Image, HStack, Stack, Text, useColorModeValue, Link as mode } from "@chakra-ui/react";
import Link from "next/link";
import { Movie } from "utils/movieList";
import { Section } from "../Section";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { poster, synopis, playerId, trailerId } = movie;

  return (
    <Box position="relative" minHeight="100vh">
      <Box position="absolute" zIndex={2} w="full">
        <Section>
          <Stack maxW="4xl" spacing="10">
            <Image w="35vw" maxW="341px" minW="100px" src={poster} alt="Todo" />
            <HStack spacing="4">
              <Button size="lg">
                <Link href={`https://www.disneyplus.com/video/${playerId}`}>Lecture</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href={`https://www.disneyplus.com/video/${trailerId}`}>Bande-annonce</Link>
              </Button>
            </HStack>
            <Text>{synopis}</Text>
          </Stack>
        </Section>
      </Box>
    </Box>
  );
};
