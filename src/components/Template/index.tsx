import React, { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Movie } from "utils/movieList";
import { MovieCard } from "src/components/MovieCard";

interface TemplateProps {
  movieList: Movie[];
}

export const Template = ({ movieList }: TemplateProps) => {
  const [opacity, setOpacity] = React.useState(1);
  const [background, setBackgound] = React.useState(movieList[0].wallpaper);

  const handleBackground = () => {
    const currentLayer = Math.trunc(window.scrollY / window.innerHeight);
    setBackgound(movieList[currentLayer].wallpaper);
  };

  const handleOpacity = () => {
    if (window.scrollY > 0) {
      const currentLayer = window.scrollY / window.innerHeight;
      const rawOpacity = currentLayer - Math.floor(currentLayer);
      const opacity = 1 - rawOpacity;
      setOpacity(opacity);
    }
  };

  const handleScroll = () => {
    handleBackground();
    handleOpacity();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box>
      {/* Backgrouds */}
      <Box position="fixed" zIndex={0}>
        <Image w="full" opacity={opacity} src={background} alt="Todo" />
      </Box>
      {/* Movie layer */}
      <Box>
        {movieList.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};
