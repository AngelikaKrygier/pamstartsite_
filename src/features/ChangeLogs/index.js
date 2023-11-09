import { Section } from "../../common/Section/styled";
import { Tile } from "../../common/Tile";
import { getChangeLogs } from "../../utils/getApi";
import { useDataFetching } from "../../utils/useDataFetching";

export const ChangesLog = () => {
  const { data: changeLogs } = useDataFetching(getChangeLogs);

  return !changeLogs ? (
    ""
  ) : (
    <Section changeLog>
      <Tile list={changeLogs} changeLog tileHeader={"Lista Zmian"} />
    </Section>
  );
};
