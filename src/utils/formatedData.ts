import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatPublishedDate(isoDate: string) {
	const publishedDate = parseISO(isoDate);
	const distance = formatDistanceToNow(publishedDate, {
		addSuffix: true,
		locale: ptBR,
	});

	const cleanDistance = distance.replace("cerca de ", "");

	return `Publicado ${cleanDistance}`;
}
