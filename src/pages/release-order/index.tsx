import type { NextPage } from "next";
import { releaseOrder } from "utils/movieList";
import { Template } from "src/components/Template";

const ReleaseOrder: NextPage = () => {
  return <Template movieList={releaseOrder} />;
};

export default ReleaseOrder;
