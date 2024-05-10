<script lang="ts">
	export let val: string;
</script>

<a href={`/books/${val}`} class={"text-value"}>{val}</a>
