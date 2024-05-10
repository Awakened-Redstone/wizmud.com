<script lang="ts">
	import { textParser } from '$lib/shared';
	import { page } from '$app/stores';

	let slot: HTMLElement;

	function load(slot: any) {
		if (!slot) return;
		const content = slot.innerText;
		document.getElementById("tmp")?.remove();

		document.getElementById("render").innerHTML = textParser.render(content ?? "")
	}

	$: load(slot);

	function render() {
		return textParser.render(slot.innerText ?? "");
	}
</script>

<span id="render"></span>
<span bind:this={slot} id="tmp"><slot/></span>
