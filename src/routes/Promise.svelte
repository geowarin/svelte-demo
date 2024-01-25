
<script lang="ts">
	import { fetchJoke } from '../utils/fetchJoke';

	const promise = fetchJoke()
</script>

{#await promise}
	<h3>Loading...</h3>
{:then joke}
	<p>{joke.value}</p>
{:catch error}
	<div class="error">{error.message}</div>
{/await}