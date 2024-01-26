<script>
	import { fetchJoke } from '../../utils/fetchJoke';
</script>

{#await fetchJoke()}
	<h3>Loading...</h3>
{:then joke}
	<p>{joke.value}</p>
{:catch error}
	<div class="error">{error.message}</div>
{/await}