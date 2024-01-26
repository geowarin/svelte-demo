<script>
	import { count } from './writable-store';
	import { Button } from 'flowbite-svelte';

	function decrement() {
		// TODO decrement the count
	}
</script>

<Button on:click={decrement}>
	-
</Button>
