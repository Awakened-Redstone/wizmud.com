import { Parser } from 'simple-text-parser';
import { textParser } from '$lib/shared';

const trustUsers: string[] = [
	"nav",
	"twitch"
]

const internalTextParser = new Parser();
internalTextParser.addRule(/\w+\.\w+/gi , match => {
	return parseScriptSimple(match);
});

export function parseScriptSimple(script: string, trust: boolean = false, guessTrust: boolean = true) {
	if (trust) {
		guessTrust = false;
	}

	const split = script.split(" ");
	const sections: string[] = [split.shift() as string, split.join(' ')]
	const parts = sections[0].split(".");
	const user = parts[0]
	if (guessTrust) {
		trust = trustUsers.includes(user.toLowerCase())
	}

	return `\
<span class="${trust ? "text-trust" : "text-username"}">${parts[0]}</span>\
${parts[1] && `.<span class="text-script">${parts[1]}</span>`}`
}

export function parse(script: string, trust: boolean = false, guessTrust: boolean = true) {
	if (trust) {
		guessTrust = false;
	}

	const split = script.split(" ");
	const sections: string[] = [split.shift() as string, split.join(' ')]
	const parts = sections[0].split(".");
	const user = parts[0]
	if (guessTrust) {
		trust = trustUsers.includes(user.toLowerCase())
	}

	const command = `\
<span class="${trust ? "text-trust" : "text-username"}">${user}</span>\
${parts[1] && `.<span class="text-script">${parts[1]}</span>`}`

	let params: string = "";

	type ScriptParams = {
		[key: string]: string | number | null | string[] | number[]
	}

	if (split.length > 0) {
		const invalidJson = sections[1]
		const validJson = invalidJson.replace(/(\w+)(?=:)/g, '"$1"').replace(/(?<=:) ?(#s\.\w+\.\w+)/g, '"$1"');
		const json: ScriptParams = JSON.parse(validJson);

		const keys = Object.keys(json);
		const space = keys.length > 0 ? " " : ""
		const formattedParams = keys.map((key, index) => {
			const val = json[key]
			let parsedVal = JSON.stringify(val)
			let isTarget: boolean = false;
			if (typeof val === "string") {
				if (/(#s\.\w+\.\w+)/g.test(val as string)) {
					const parts = val.split(".");
					const trig = parts.shift();
					const script = parts.join(".");
					parsedVal = `${trig}.${internalTextParser.render(script)}`;
				} else {
					//TODO: parse recursively
				}
			}

			return `<span class="text-key">${key}</span>: <span class="text-value">${parsedVal}</span>`
		});

		params = ` {${space}${formattedParams.join(", ")}${space}}`
	}

	return `${command}${params}`;
}
