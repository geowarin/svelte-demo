<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button } from 'flowbite-svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello! ' + new Date().toISOString()
		});
	}
</script>

<Button class="my-2" on:click={sayHello}>
Click to say hello
</Button>
