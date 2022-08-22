import type { NextPage } from "next";
import { macheteOrder } from "utils/movieList";
import { Template } from "src/components/Template";

const MacheteOrder: NextPage = () => {
  return <Template movieList={macheteOrder} />;
};

export default MacheteOrder;
