import {
	differenceInDays,
	format,
	formatDistanceToNow,
	parseISO,
} from "date-fns";
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

export function FormatedDate(isoDate: string) {
	const created = parseISO(isoDate);
	const dateFormated = format(created, "dd MMM  yyyy ", {
		locale: ptBR,
	});
	return dateFormated;
}

export function FormatDifarenceDays(isoDate: string) {
	const deadline = parseISO(isoDate);
	const today = parseISO(new Date().toISOString());

	const distance = differenceInDays(deadline, today);

	return distance;
}
