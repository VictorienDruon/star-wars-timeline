import React, { useEffect } from "react";
import { Box, Text, Link, Stack, Center } from "@chakra-ui/react";
import { Movie } from "utils/movieList";
import { MovieCard } from "src/components/MovieCard";

interface TemplateProps {
  movieList: Movie[];
}

export const Template = ({ movieList }: TemplateProps) => {
  const [foreground, setForegound] = React.useState(movieList[0].wallpaper);
  const [background, setBackgound] = React.useState(movieList[1].wallpaper);
  const [opacity, setOpacity] = React.useState(1);

  const handleScroll = () => {
    const currentLayer = window.scrollY / window.innerHeight;

    // Handle Backrgound
    const currentLayerTruncated = Math.trunc(currentLayer);
    setForegound(movieList[currentLayerTruncated].wallpaper);
    if (currentLayerTruncated + 1 < movieList.length) {
      setBackgound(movieList[currentLayerTruncated + 1].wallpaper);
    }

    // Handle Opacity
    if (window.scrollY > 0) {
      const rawOpacity = currentLayer - Math.floor(currentLayer);
      const opacity = 1 - rawOpacity;
      setOpacity(opacity);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* Backgrouds */}
      <Box
        position="fixed"
        h="full"
        w="full"
        zIndex={1}
        bgImage={`url('${foreground}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        opacity={opacity}
      />
      <Box
        position="fixed"
        h="full"
        w="full"
        zIndex={0}
        bgImage={`url('${background}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      />

      {/* Navbar */}
      <Box position="fixed" zIndex={2} top={`${(window.innerHeight - movieList.length * (30 + 6)) / 2}px`}>
        <Stack spacing="6px">
          {movieList.map((movie) => (
            <Center key={movie.id} h="30">
              <Text
                key={movie.id}
                className={movie.id}
                position="fixed"
                right="24px"
                fontSize={12}
                fontWeight="bold"
                visibility="hidden"
              >
                {movie.title.toUpperCase()}
              </Text>
              <Link position="fixed" right="0px" w="24px" href={`#${movie.id}`}>
                <Box
                  key={movie.id}
                  className={movie.id}
                  ml="8px"
                  w="2px"
                  h="30px"
                  bg="white"
                  opacity="0.5"
                  borderRadius="5"
                />
              </Link>
            </Center>
          ))}
        </Stack>
      </Box>

      {/* Movie layer */}
      <Box zIndex={1}>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </>
  );
};
