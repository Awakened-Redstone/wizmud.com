<script lang="ts">
	import yaml from 'js-yaml';
	import type { BookType } from '$lib/books/core';
	import { textParser } from '$lib/shared';
	import type { PageError } from '$lib/shared';
	import Book from '$lib/Book.svelte';
	import { page } from '$app/stores';
	import errors from "$lib/books/error.yaml?raw"
	const errorDoc = yaml.load(errors) as PageError;

	const titles = {
		council: 'the council',
		wizards: 'wizards'
	};

	async function loadBook() {
		let data;

		if ($page.params.book === "error") {
			throw "";
		}

		try {
			data = await import(`$lib/books/${$page.params.book}.yaml?raw`);
		} catch (e) {
			throw "";
		}

		const doc = yaml.load(data.default) as BookType;
		const docKeys = Object.keys(doc);
		docKeys.shift();
		docKeys.shift();

		return { doc: doc, keys: docKeys };
	}

	const promise = loadBook();
</script>

<!--
Unknown Wizard — Today at 17:33
@wizmud - Unofficial
For the library..
fs: unknownwiz.showwiz - Show off your wizardness with a cool hat!
fs: unknownwiz.wand - "Cast" a spell by swinging you wand
-->

{#await promise}
	<main>

	</main>
{:then data}
	{@const doc = data.doc}
	{@const docKeys = data.keys}

	<main>
		{@html doc.greeting}<br />
		Remember to confirm the security level<br />
		Learn how to use {@html textParser.render("WC")} at the
		<Book val="pay2wiz" />
		<span class="text-key">book</span>
		<br /><br /><br /><br /><br />
		{#each docKeys as docKey, i}
			{@const source = doc[docKey]}
			{@const keys = Object.keys(source)}
			{#if i > 0}
				<br /><br /><br /><br />
			{/if}
			<div>
				Spells from {titles[docKey]}:
				<br /><br /><br />
				{#each keys as key}
					{@const spell = source[key]}
					<div>
						{@html textParser.render(key)} <span class="text-custom-c">- Author: {spell.author ?? "unknown"}
						| <span class="text-custom-h">{spell.security.toUpperCase()}SEC</span>
						{#if spell.cost}
							| Cost: {@html textParser.render(`${spell.cost}WC`)}/{spell.costType ?? "cast"}
						{:else}
							| Free
						{/if}
						| Last verified at {spell.date}
					</span>
						<br />
						<br />
						<div>
							{@html textParser.render(spell.description)}
						</div>
					</div>
					{#if i < keys.length - 1}
						<br />
						<br />
					{/if}
				{/each}
			</div>
		{/each}
		<br />
	</main>
{:catch err}
		<main class="my-auto h-full text-center flex justify-center flex-col">
			<pre class="w-fit mx-auto text-left">{@html errorDoc[err.length === 0 ? 404 : 500].art}</pre>
			<p class="pt-6 whitespace-pre">{errorDoc[err.length === 0 ? 404 : 500].message}</p>
		</main>
{/await}
