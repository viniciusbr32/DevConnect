import { Features } from './componentes/features';
import { Hero } from './componentes/hero';
import { Project } from './componentes/project';
import { Stats } from './componentes/statsList';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Project />
    </>
  );
}
