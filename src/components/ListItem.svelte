<script lang="ts">
	export let name: string;

	let animate = false;

	function mouseOver(e: MouseEvent) {
		animate = true;
	}
	function animationEnd(e: AnimationEvent) {
		animate = false;
	}

</script>

<li>
	<div class="title" on:mouseover={mouseOver} role="listitem" on:focus={() => {}}>
		<div>{name}</div>

		<div class="title2" class:animate style="pointer-events: none" on:animationend={animationEnd}>
			<div>{name} :)</div>
		</div>
	</div>
</li>

<style>
    li {
        max-width: 400px;
    }
		
    .title {
        position: relative;
        display: flex;
        flex-grow: 1;
        background: #2d3a52;
        transition: background-color 1s;
        height: 36px;
    }

    .title2 {
        display: flex;
        /*flex-grow: 1;*/
        background: #2d3a52;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
        background: linear-gradient(90deg, #9e814c, #ddba83 60%, #9e814c);
        transition: opacity .6s ease-in
    }
		
    .title:hover > .title2 {
        opacity: 1;
        transition: .1s
    }

    .animate {
        animation: burst-out .4s ease-in-out forwards
    }

    @keyframes burst-out {
        0% {
            clip-path: circle(0)
        }
        to {
            clip-path: circle(100%)
        }
    }


</style>