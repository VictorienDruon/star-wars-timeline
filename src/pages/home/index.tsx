import React from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Stack, Box, HStack, Image, Text, Heading, Button } from "@chakra-ui/react";
import { Section } from "src/components/Section";

const Home: NextPage = () => {
  return (
    <>
      <Box minHeight="100vh" bgImage="bg-stars.jpg">
        <HStack p="1vw" spacing="auto">
          <Image w="15vw" minW="100px" src="star-wars.png" alt="Star Wars" />
          <Heading>How to watch</Heading>
        </HStack>
        <Box bg="#343434" h="1.5px" w="full" />
        <Section mt="2vw" mb="3vw">
          <Text color="#9b9b9b" mb="4vw">
            {`Vous voulez découvrir l'univers Star Wars mais ne savez pas par où commencer ? Ou bien vous voulez tout
            recommencer à zéro mais ne vous souvenez plus dans quel ordre ? Peut-être même que vous cherchez un nouvel
            ordre de visionnage pour une lecture complètement différente des Star Wars.`}
          </Text>
          <Image w="90vw" minW="100px" src="timeline.jpg" alt="timeline" opacity="0.6" mb="3vw" />
          <Text color="#9b9b9b" mb="3vw">
            {`Star Wars existe depuis 45 ans et la quantité d'oeuvres en résultant peut poser des problèmes de lisibilité.
            L'univers canon se déroule autour de six ères distinctes et chaque oeuvre a sa place dans cette chronologie.
            Il existe plusieurs ordres de visionnage des Star Wars qui apporte chacun une expérience complètement
            différente de la franchise. Ici vous ai référencé les trois ordres de visionnage les plus connus. Bon
            visionnage et May the Force be with you !`}
          </Text>
          <HStack spacing="30px" h="80vh">
            <NextLink href="/chronological-order">
              <Box
                borderRadius="30"
                w="full"
                h="full"
                bgImage="chronological.png"
                bgPosition="top"
                bgSize="auto"
                p="2vw"
              >
                <Heading mb="2vw">Ordre chronologique</Heading>
                <Text>
                  {`Visionnez Star Wars dans l'ordre des événement qui se déroulent dans l'univers du point de vue des
                  personnages.`}
                </Text>
              </Box>
            </NextLink>
            <Stack spacing="30px" w="full" h="full">
              <NextLink href="/release-order">
                <Box
                  borderRadius="30"
                  w="full"
                  h="full"
                  bgImage="release.jpg"
                  bgPosition="center"
                  bgSize="auto"
                  p="2vw"
                >
                  <Heading mb="2vw">Ordre de sortie</Heading>
                  <Text>
                    {`Suivez Star Wars dans le sens de la narration en visionnant les oeuvres dans leur ordre
                    d'apparition. Ordre conseillé pour les novices.`}
                  </Text>
                </Box>
              </NextLink>
              <NextLink href="/machete-order">
                <Box borderRadius="30" w="full" h="full" bgImage="machete.jpg" bgPosition="top" bgSize="auto" p="2vw">
                  <Heading mb="2vw">Ordre Machete</Heading>
                  <Text>
                    {`Cet arrangement considère Luke Skywalker comme étant le héros principal des films Star Wars et se
                    concentre donc sur une seule partie de l'univers.`}
                  </Text>
                </Box>
              </NextLink>
            </Stack>
          </HStack>
        </Section>
      </Box>
    </>
  );
};
export default Home;
