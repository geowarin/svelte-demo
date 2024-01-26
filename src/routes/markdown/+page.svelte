<script>
	import { marked } from 'marked';
	import { Textarea } from 'flowbite-svelte';

	let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;
</script>

<div class="grid">
	input
	<Textarea bind:value rows="12"></Textarea>

	output
	<div class="output">{@html marked(value)}</div>
</div>

<style lang="postcss">
    .grid {
        display: grid;
        grid-template-columns: 5em 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1em;
        height: 100%;
    }

    :global(.output ul) {
        list-style: disc;
        margin-left: 2em;
    }

    :global(.output h1) {
        font-size: 2em;
    }
</style>