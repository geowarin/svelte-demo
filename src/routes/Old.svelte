<script lang="ts">
	
	import ListItem from './ListItem.svelte';

	const titles = [
		{
			name: 'Portal'
		}, {
			name: 'Stardew Valley'
		}, {
			name: 'Terraria'
		}, {
			name: 'People Playground'
		}, {
			name: 'Left 4 dead'
		}, {
			name: 'Hades'
		}, {
			name: 'Portal 2'
		}, {
			name: 'Lethal Company'
		}
	];
</script>


<div class="ranking">
	<ol>
		{#each titles as title}
			<ListItem name={title.name}/>
		{/each}
	</ol>
</div>
