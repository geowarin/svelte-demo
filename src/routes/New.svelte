<script lang="ts">
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


<ul>
	{#each titles as title}
		<li>
			<span class="title">{title.name}
				<span class="title2">{title.name}</span>
			</span>
		</li>
	{/each}
</ul>

<style>
	ul {
			border: 2px solid #2d3a52;
			width: 910px;
			border-radius: 4px;
			padding: 0;
	}
	
	li {
			list-style: none;
			padding: 10px;
			display: flex;
	}
	
	.title {
			opacity: 1;
			position: relative;
			flex-grow: 1;
	}
	.title2 {
      background: linear-gradient(90deg, #9e814c, #ddba83 60%, #9e814c);
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 1;
	}
</style>