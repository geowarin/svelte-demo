<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {

		document.querySelectorAll('.ranking li > .title').forEach((e => {
			const t = e.appendChild(e.cloneNode(true)) as HTMLSpanElement;
			t.style.pointerEvents = 'none';
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
    .ranking {
        max-width: 400px;
    }

    .ranking > ol {
        display: flex;
				justify-content: center;
        flex-direction: column;
        gap: 2px;
        position: relative;
        width: 100%;
        padding: 4px;
				list-style: none;
    }

    .ranking li > * {
        position: relative;
        z-index: 1
    }
</style>