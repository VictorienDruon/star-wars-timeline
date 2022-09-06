import React, { useEffect } from "react";
import { Box, Button, Link } from "@chakra-ui/react";
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

  const navbar = () => {
    alert("test");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const li = document.querySelectorAll("li");
    if (li) {
      for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("mouseover", navbar);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseover", navbar);
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
      <Box zIndex={2} position="fixed" w="24px">
        <ul>
          {movieList.map((movie) => (
            <li key={movie.id}>
              <Box key={movie.id} w="1px" h="24px" bg="white" mb="6px" ml="13px" opacity="0.3">
                <Link href={`#${movie.id}`} />
              </Box>
            </li>
          ))}
        </ul>
      </Box>
      {/* Movie layer */}
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};
