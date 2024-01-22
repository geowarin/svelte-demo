<script lang="ts">
	export let name: string;


	let innerDiv: HTMLDivElement;
	function mouseOver(e: MouseEvent) {
		innerDiv.classList.remove('animate');
		innerDiv.classList.add('animate');
	}
	function animationEnd(e: AnimationEvent) {
		e.target.classList.remove('animate');
	}

</script>

<li>
	<div class="title" on:mouseover={mouseOver} role="listitem" on:focus={() => {}}>
		<div>{name}</div>

		<div class="title2" bind:this={innerDiv} style="pointer-events: none" on:animationend={animationEnd}>
			<div>{name}</div>
		</div>
	</div>
</li>