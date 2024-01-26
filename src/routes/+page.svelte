<script lang="ts">
	import List from '../components/List.svelte';
	import Promise from '../components/Promise.svelte';
	import Dispatcher from '../components/Dispatcher.svelte';
	import Markdown from '../components/Markdown.svelte';
	
	
	let messages: {text: string}[] = []
	function handleMessage(event: CustomEvent<{text: string}>) {
		messages = messages.concat(event.detail)
	}
	
	$: {
		if (messages.length > 10) {
			messages = messages.slice(1);
		}
	}
</script>

<List/>

<Promise />

<Dispatcher on:message={handleMessage} />

<ol>
	{#each messages as message}
		<li>{message.text}</li>
	{/each}
</ol>

<Markdown />
