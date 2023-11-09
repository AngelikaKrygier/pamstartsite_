import { Tile } from "../../common/Tile";
import { getConceptsList } from "../../utils/getApi";
import { useDataFetching } from "../../utils/useDataFetching";

export const Concepts = () => {
  const { data: concepts } = useDataFetching(getConceptsList);

  return !concepts ? "" : <Tile list={concepts} tileHeader={"Koncepcje"} />;
};
