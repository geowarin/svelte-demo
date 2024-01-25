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


<ol>
	{#each titles as title}
		<ListItem name={title.name} />
	{/each}
</ol>

<style>
    ol {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2px;
        position: relative;
        width: 100%;
        padding: 4px;
        list-style: none;
    }
</style>
