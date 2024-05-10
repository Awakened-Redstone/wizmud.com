import { Parser } from 'simple-text-parser';
import { parse } from '$lib/parse_script';

export const textParser = new Parser();

textParser.addRule("\n", match => {
	return "<br />"
})

textParser.addRule(/^ +/, match => {
	return match.replaceAll(" ", "&nbsp;")
})

textParser.addRule(/\w+\.\w+ ?(\{ ?[^}]* ?})?/gi, match => {
	return parse(match);
});

textParser.addRule(/(\d+)?WC/gi, (match, groups) => {
	return `${groups ? `<span class="text-custom-W">${groups}</span>` : ""}<span class="text-custom-Y">WC</span>`;
});

textParser.addRule(/`[0-z](.+)`/, (match, groups) => {
	return `<span class="text-custom-${match.substring(1, 2)}">${groups}</span>`;
})

export type PageError = {
	[error: string]: ErrorStruct
}

export type ErrorStruct = {
	art: string
	message: string
}
