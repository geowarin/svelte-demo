<script>
	import { count } from './writable-store';
	import { Button } from 'flowbite-svelte';

	function increment() {
		// TODO increment the count
	}
</script>

<Button on:click={increment}>
	+
</Button>
