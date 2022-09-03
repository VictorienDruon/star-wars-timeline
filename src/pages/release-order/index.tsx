import type { NextPage } from "next";
import { Template } from "src/components/Template";
import { movieList } from "utils/movieList";

const releaseOrder = [...movieList].sort(
  (a, b) => parseInt(a.release.slice(0, 4), 10) - parseInt(b.release.slice(0, 4), 10),
);

const ReleaseOrder: NextPage = () => {
  return <Template movieList={releaseOrder} />;
};

export default ReleaseOrder;
