import React, { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Movie } from "utils/movieList";
import { MovieCard } from "src/components/MovieCard";

interface TemplateProps {
  movieList: Movie[];
}

export const Template = ({ movieList }: TemplateProps) => {
  const [opacity, setOpacity] = React.useState(1);
  const [foreground, setForegound] = React.useState(movieList[0].wallpaper);
  const [background, setBackgound] = React.useState(movieList[1].wallpaper);

  const handleBackground = () => {
    const currentLayer = Math.trunc(window.scrollY / window.innerHeight);
    setForegound(movieList[currentLayer].wallpaper);
    if (currentLayer < movieList.length) {
      setBackgound(movieList[currentLayer + 1].wallpaper);
    }

    console.log(window.scrollY, window.innerHeight, currentLayer);
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
      {/* Movie layer */}
      <Box>
        {movieList.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </Box>
    </>
  );
};
