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

  const overNavbar = (i: number) => {
    const title = document.getElementById(`${movieList[i].id}-title`);
    if (title) {
      title.innerHTML = movieList[i].title.toUpperCase();
    }
    const box = document.getElementById(`${movieList[i].id}-box`);
    if (box) {
      box.style.width = "4px";
      box.style.opacity = "1";
    }
  };

  const leaveNavbar = (i: number) => {
    const title = document.getElementById(`${movieList[i].id}-title`);
    if (title) {
      title.innerHTML = "";
    }
    const box = document.getElementById(`${movieList[i].id}-box`);
    if (box) {
      box.style.width = "2px";
      box.style.opacity = "0.5";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const elements = document.getElementsByClassName("navbarElement");
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(
          "mouseover",
          function () {
            overNavbar(i);
          },
          false,
        );

        elements[i].addEventListener(
          "mouseleave",
          function () {
            leaveNavbar(i);
          },
          false,
        );
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseover", function () {
        overNavbar;
      });
      window.removeEventListener("mouseleave", function () {
        leaveNavbar;
      });
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
      <Box position="fixed" zIndex={3}>
        <Stack spacing="6px">
          {movieList.map((movie) => (
            <Center key={movie.id} h="30" className="navbarElement">
              <Box key={movie.id} position="fixed" right="24px" fontSize={12} fontWeight="bold">
                <p id={`${movie.id}-title`}></p>
              </Box>
              <Link position="fixed" right="0px" w="24px" href={`#${movie.id}`}>
                <Box
                  id={`${movie.id}-box`}
                  key={movie.id}
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
