import { Features } from "./componentes/features";
import { GetStarted } from "./componentes/getStarted";
import { Hero } from "./componentes/hero";
import { Project } from "./componentes/project";
import { Stats } from "./componentes/statsList";
import { Testimonial } from "./componentes/testimonial";

export function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Stats />
			<Project />
			<Testimonial />
			<GetStarted />
		</>
	);
}
