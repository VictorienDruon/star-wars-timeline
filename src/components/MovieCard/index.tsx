import { Box, Heading, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { Movie } from "utils/movieList";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { title, releaseDate } = movie;

  return (
    <Box bg={mode("white", "gray.700")} p="8" rounded="md" boxShadow={mode("md", undefined)}>
      <Heading>{title}</Heading>
      <Text>{releaseDate}</Text>
    </Box>
  );
};
