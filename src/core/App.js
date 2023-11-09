import { Container } from "../common/Container/styled";
import { HeaderBar } from "../common/HeaderBar";
import { Section } from "../common/Section/styled";
import { ChangesLog } from "../features/ChangeLogs";
import { Concepts } from "../features/Concepts";
import { CurrentFeatures } from "../features/CurrentFeatures";

export const App = () => (
  <Container>
    <HeaderBar />
    <Section>
      <CurrentFeatures />
      <Concepts />
    </Section>
    <ChangesLog />
  </Container>
);
