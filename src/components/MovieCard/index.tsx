import { Box, Button, Image, HStack, Stack, Text, useColorModeValue, Link as mode, Badge } from "@chakra-ui/react";
import Link from "next/link";
import { Movie } from "utils/movieList";
import { Section } from "../Section";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { title, poster, synopis, playerId, trailerId, duration, age, release } = movie;

  return (
    <Box position="relative" minHeight="100vh" id={movie.title}>
      <Box position="absolute" zIndex={2} w="full">
        <Section>
          <Stack maxW="4xl" spacing="10">
            <Image w="35vw" maxW="341px" minW="100px" src={poster} alt={title} />
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="3" px="2" colorScheme="gray">
                {age}+
              </Badge>
              <Badge borderRadius="3" px="2" colorScheme="gray" ml="2">
                CC
              </Badge>
              <Box letterSpacing="wide" fontSize="xs" ml="2">
                {release} &bull; {duration}
              </Box>
            </Box>
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
