<script lang="ts">
	import Dispatcher from '../../components/Dispatcher.svelte';

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


<Dispatcher on:message={handleMessage} />

<ol>
	{#each messages as message}
		<li>{message.text}</li>
	{/each}
</ol>

