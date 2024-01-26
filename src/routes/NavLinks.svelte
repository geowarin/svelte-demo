<script>
	import { AddressCardSolid, ListMusicSolid } from 'flowbite-svelte-icons';
	import NavItem from './NavItem.svelte';
</script>

<ul class="space-y-2">
	<li>
		<a
			href="/"
			class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
		>
			<AddressCardSolid aria-hidden="true" fill="currentColor" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			<span class="ml-3">Overview</span>
		</a>
	</li>

	<NavItem link="/250">
		<ListMusicSolid slot="icon" />
		250 hover effect
	</NavItem>
	<NavItem link="/chuck">
		Chuck facts
	</NavItem>
	<NavItem link="/ball">
		Ball!
	</NavItem>
	<NavItem link="/transition">
		Transition
	</NavItem>
	<NavItem link="/dispatch">
		Dispatch
	</NavItem>
</ul>