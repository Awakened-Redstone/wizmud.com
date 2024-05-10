<script>
	import Book from '$lib/Book.svelte';
</script>

<main>
	<pre class="text-key">
██████╗  █████╗  █████╗ ██╗  ██╗ ██████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝██╔════╝
██████╦╝██║  ██║██║  ██║█████═╝ ╚█████╗
██╔══██╗██║  ██║██║  ██║██╔═██╗  ╚═══██╗
██████╦╝╚█████╔╝╚█████╔╝██║ ╚██╗██████╔╝
╚═════╝  ╚════╝  ╚════╝ ╚═╝  ╚═╝╚═════╝
	</pre>

	<Book val="alohomora"/>, breaking the mud <span class={"text-custom-c"}> - Publisher: <a href={"/publishers/hotwizcorp"}>HotWiz Corp</a> | Writer: unknown</span><br/>
	<Book val="pay2wiz"/>, casting spells <span class={"text-custom-c"}> - Publisher: <a href={"/publishers/hotwizcorp"}>HotWiz Corp</a> | Writer: unknown</span><br/>
	<Book val="4rc4n3_3y3"/>, n0 h1d1ng w1th1n th3 mud <span class={"text-custom-c"}> - Publisher: <a href={"/publishers/nomiconcorp"}>Nomicon Corp</a> | Writer: ¨ª¢©¦Ã¤ª¦</span><br/>
	A <Book val="hat"/> in wiz <span class={"text-custom-c"}> - Publisher: ¨ª¢©¦Ã¤ª¦©¦ª¢Ã | Writer: ¨ª¢©¦Ã¤ª¦</span><br/>

	<br/><br/><br/>
	<p>
		<span class={"text-custom-D glow text-xl"}>:::LIBRARY COMMUNICATION:::</span>
		<br/>
		Want a book or spell in the library?<br/>
		Send <span class={"text-custom-c"}>@</span><span class={"text-custom-H"}>wizmud</span> a DM in Discord with the required info
		<br/><br/>
		Please provide:<br/>
		- the spell script,<br/>
		- security level,<br/>
		- a clear description<br/>
		- the cost, if any<br/>
		<br/>
		After that the information will be provided to the publishers.<br/>
		The preferred currency for spells is <span class={"text-custom-Y"}>WC</span>
	</p>
</main>
