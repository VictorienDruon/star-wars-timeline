import type { NextPage } from "next";
import { Template } from "src/components/Template";
import { movieList } from "utils/movieList";

const releaseOrder = [...movieList].sort((a, b) => a.release - b.release);

const ReleaseOrder: NextPage = () => {
  return <Template movieList={releaseOrder} />;
};

export default ReleaseOrder;
