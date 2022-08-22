import type { NextPage } from "next";
import { chronologicalOrder } from "utils/movieList";
import { Template } from "src/components/Template";

const ChronologicalOrder: NextPage = () => {
  return <Template movieList={chronologicalOrder} />;
};

export default ChronologicalOrder;
