<script>
	import '../app.pcss';
	import NavLinks from './NavLinks.svelte';
	import { AddressCardSolid, FaceMindBlowSolid, ListMusicSolid } from 'flowbite-svelte-icons';

</script>


<div class="antialiased bg-gray-50 dark:bg-gray-900">
	<nav
		class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
		<div class="flex flex-wrap justify-between items-center">
			<div class="flex justify-start items-center">
				<a href="https://flowbite.com" class="flex items-center justify-between mr-4">
					<FaceMindBlowSolid
						class="mr-3 h-8"
						alt="Logo"
					/>
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LTT</span>
				</a>

			</div>
		</div>
	</nav>

	<!-- Sidebar -->

	<aside
		class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
		aria-label="Sidenav"
		id="drawer-navigation"
	>
		<div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
			<NavLinks />
		</div>
	</aside>

	<main class="p-4 md:ml-64 h-auto pt-20">
		<div>
			<slot />
		</div>

	</main>
</div>