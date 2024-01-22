<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {

		document.querySelectorAll('.ranking li > .title').forEach((e => {
			const t = e.appendChild(e.cloneNode(true)) as HTMLSpanElement;
			t.classList.remove("title");
			t.classList.add("title2");
			t.style.pointerEvents = 'none';
			// const t = e as HTMLDivElement;
			e.addEventListener('mouseenter', (e => {
				console.log('mouse enter!!!!!!!');
				t.classList.remove('animate');
				t.offsetWidth;
				t.classList.add('animate');
			}));
			e.addEventListener('animationend', (e => {
				console.log('animation end', e);
				t.classList.remove('animate');
			}));
		}));
	});

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
			<li>
				<div class="title">
					<div>{title.name}</div>
				</div>
			</li>
		{/each}
	</ol>
</div>

<style>

</style>