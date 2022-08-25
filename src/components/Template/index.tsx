import React, { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
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
