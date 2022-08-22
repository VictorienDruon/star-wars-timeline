import type { NextPage } from "next";
import { Template } from "src/components/Template";
import { movieList } from "utils/movieList";

const ChronologicalOrder: NextPage = () => {
  return <Template movieList={movieList} />;
};

export default ChronologicalOrder;
