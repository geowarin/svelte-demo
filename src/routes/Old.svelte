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
						<a class="rank" href="https://steam250.com/top250#1">1</a>
						<div class="title">
							<a href="https://club.steam250.com/app/620">
								<img
									alt="Logo"
									class="lazy entered loaded"
								/>
							</a>
							<a href="https://club.steam250.com/app/620">
								<span>{title.name}</span>
							</a>
							<div class="title" style="pointer-events: none">
								<a href="https://club.steam250.com/app/620">
									<img
										alt="Logo"
										class="lazy entered loaded"
									/>
								</a>
								<a href="https://club.steam250.com/app/620">
									<span>{title.name}</span>
								</a>
							</div>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>
</section>


<style>
    .ranking {
        max-width: 950px;
        line-height: 1
    }

    .compact.ranking > ol {
        display: grid;
        gap: 2px;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        font-size: 90%;
        line-height: .9;
        padding: 4px;
        border-radius: 4px;
        background: radial-gradient(30% 70% at 30% 25%, #30365c, #606ea8) 0 0/200% 200%;
        filter: drop-shadow(4px 4px 0 #1b1f26)
    }

    .compact.ranking > ol:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        bottom: 2px;
        right: 2px;
        border-radius: 4px;
        background: #121d29
    }

    .compact.ranking li {
        display: flex;
        align-items: center;
        --step: 0
    }

    .compact.ranking li .title > :first-child {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        background: #181720 no-repeat 50%/contain
    }

    .compact.ranking li img {
        height: 36px;
        min-width: 96px
    }

    .compact.ranking li .title {
        display: flex;
        flex-grow: 1;
        background: #2d3a52;
        text-shadow: 1px 1px 1px #1e1242;
        transition: background-color 1s
    }

    .compact.ranking li .title > :nth-child(2) {
        flex-grow: 1;
        line-height: 1;
        align-self: center
    }

    .compact.ranking li .title > :nth-child(2) > .movement + span {
        vertical-align: middle
    }

    .compact.ranking li > * {
        position: relative;
        z-index: 1
    }

    /*.compact.ranking li > .title:before {*/
    /*    content: "";*/
    /*    position: absolute;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    background: linear-gradient(86deg, var(--dark) calc(var(--start) - var(--spread) - var(--drift) * var(--step) - var(--growth) * var(--step)), var(--light) calc(var(--start) - var(--drift) * var(--step)), var(--dark) calc(var(--start) + var(--spread) - var(--drift) * var(--step) + var(--growth) * var(--step)));*/
    /*    mix-blend-mode: color-dodge;*/
    /*    z-index: -1;*/
    /*    --light: #1a2833;*/
    /*    --dark: transparent;*/
    /*    --start: 58%;*/
    /*    --spread: 13%;*/
    /*    --drift: -0.18%;*/
    /*    --growth: 1.8%;*/
    /*    animation: compact-ranking-quing 1.7s .1s backwards*/
    /*}*/

    /*@keyframes compact-ranking-quing {*/
    /*    0% {*/
    /*        width: calc(100% - 75% * var(--step) / 9)*/
    /*    }*/
    /*}*/

    /*.compact.ranking li:nth-child(2) > .title {*/
    /*    background: #2c374f;*/
    /*    --step: 1*/
    /*}*/

    /*.compact.ranking li:nth-child(3) > .title {*/
    /*    background: #2c334a;*/
    /*    --step: 2*/
    /*}*/

    /*.compact.ranking li:nth-child(4) > .title {*/
    /*    background: #2a2f45;*/
    /*    --step: 3*/
    /*}*/

    /*.compact.ranking li:nth-child(5) > .title {*/
    /*    background: #292d40;*/
    /*    --step: 4*/
    /*}*/

    /*.compact.ranking li:nth-child(6) > .title {*/
    /*    background: #292b3d;*/
    /*    --step: 5*/
    /*}*/

    /*.compact.ranking li:nth-child(7) > .title {*/
    /*    background: #282938;*/
    /*    --step: 6*/
    /*}*/

    /*.compact.ranking li:nth-child(8) > .title {*/
    /*    background: #272733;*/
    /*    --step: 7*/
    /*}*/

    /*.compact.ranking li:nth-child(9) > .title {*/
    /*    background: #26252e;*/
    /*    --step: 8*/
    /*}*/

    /*.compact.ranking li:nth-child(10) > .title {*/
    /*    background: #24232b;*/
    /*    --step: 9*/
    /*}*/

    .compact.ranking li a {
        color: #dfeaed;
        text-decoration: none;
        outline: none
    }

    .compact.ranking li > .rank {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        align-self: stretch;
        width: 18px;
        color: inherit;
        background: linear-gradient(#262433, #181720, #262433);
        font-size: 80%
    }

    .compact.ranking li > .rank, .compact.ranking li > a.rank:before {
        border-radius: 4px 0 0 4px;
        transition: .1s linear
    }

    .compact.ranking li > a.rank:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1
    }

    .compact.ranking li > a.rank:hover {
        color: #222
    }

    .compact.ranking li > a.rank:hover:before {
        background: #7cb5e1
    }

    .compact.ranking li > .title:hover > .title, .compact.ranking li > .title > .title:hover {
        opacity: 1;
        transition: .1s
    }

    .compact.ranking li > .title > .title {
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
        background: linear-gradient(90deg, #9e814c, #ddba83 60%, #9e814c);
        transition: opacity .6s ease-in
    }
</style>