<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {

		document.querySelectorAll('.compact.ranking li > .title').forEach((e => {
			const t = e.appendChild(e.cloneNode(true)) as HTMLSpanElement;
			console.log(t);
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


<section class="rankings">
	<section class="top10">
		<div class="compact ranking">
			<ol>
				{#each titles as title, index}
					<li>
						<span class="title">
							<a href="https://club.steam250.com/app/620">
								<img
									alt="Logo"
									class="lazy entered loaded"
								/>
							</a>
							<a href="https://club.steam250.com/app/620">
								<span>{title.name}</span>
							</a>
						</span>
					</li>
				{/each}
			</ol>
		</div>
	</section>
</section>
