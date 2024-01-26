<script lang="ts">
	import { count } from './writable-store';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';

	let count_value: number;

	count.subscribe((value) => {
		count_value = value;
	});

	// 	onDestroy(unsubscribe);
</script>

<h1>The count is {count_value}</h1>

<div class="flex gap-2">
	<Incrementer />
	<Decrementer />
</div>
