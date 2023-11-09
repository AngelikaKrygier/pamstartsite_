import { Tile } from "../../common/Tile";
import { getCurrentFeatures } from "../../utils/getApi";
import { useDataFetching } from "../../utils/useDataFetching";

export const CurrentFeatures = () => {
  const { data: currentFeatures } = useDataFetching(getCurrentFeatures);

  return !currentFeatures ? (
    ""
  ) : (
    <Tile list={currentFeatures} tileHeader={"Funkcjonalności Opcjonalne"} />
  );
};
