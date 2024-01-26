<script>
	import { marked } from 'marked';
	import { Textarea } from 'flowbite-svelte';

	let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;
</script>

<div class="grid">
	input
	<Textarea bind:value></Textarea>

	output
	<div>{@html marked(value)}</div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 5em 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1em;
        height: 100%;
    }

		/*:global(ul) {*/
		/*		list-style: disc;*/
		/*		margin-left: 2em;*/
		/*}*/
</style>