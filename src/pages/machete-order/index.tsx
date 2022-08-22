import type { NextPage } from "next";
import { Template } from "src/components/Template";
import { Movie, movieList } from "utils/movieList";

type MacheteOrderMovie = Omit<Movie, "macheteOrder"> & { macheteOrder: number };

const filteredMovie = [...movieList].filter((movie) => movie.macheteOrder) as MacheteOrderMovie[];
const macheteOrder = filteredMovie.sort((a, b) => a.macheteOrder - b.macheteOrder);

const MacheteOrder: NextPage = () => {
  return <Template movieList={macheteOrder} />;
};

export default MacheteOrder;
