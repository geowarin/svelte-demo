<script>
	import { AddressCardSolid, ListMusicSolid } from 'flowbite-svelte-icons';
	import NavItem from './NavItem.svelte';
</script>

<ul class="space-y-2">
	<NavItem link="">
		<ListMusicSolid slot="icon" />
		Home
	</NavItem>

	<NavItem link="250">
		<ListMusicSolid slot="icon" />
		250 hover effect
	</NavItem>
	<NavItem link="chuck">
		Chuck facts
	</NavItem>
	<NavItem link="ball">
		Ball!
	</NavItem>
	<NavItem link="transition">
		Transition
	</NavItem>
	<NavItem link="dispatch">
		Dispatch
	</NavItem>
	<NavItem link="markdown">
		markdown
	</NavItem>
	<NavItem link="store">
		store
	</NavItem>
	<NavItem link="derived">
		derived store
	</NavItem>
</ul>