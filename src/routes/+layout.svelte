<script>
	import '../app.pcss';
	import { AddressCardSolid, ListMusicSolid  } from 'flowbite-svelte-icons';
	import NavItem from './NavItem.svelte';
</script>


<div class="antialiased bg-gray-50 dark:bg-gray-900">
	<nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
		<div class="flex flex-wrap justify-between items-center">
			<div class="flex justify-start items-center">
				<a href="https://flowbite.com" class="flex items-center justify-between mr-4">
					<img
						src="https://flowbite.s3.amazonaws.com/logo.svg"
						class="mr-3 h-8"
						alt="Flowbite Logo"
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

				<NavItem link="/ball">
					<ListMusicSolid slot="icon" />
					Ball!
				</NavItem>
				<NavItem link="/transition">
					<ListMusicSolid slot="icon" />
					Transition
				</NavItem>
			</ul>

		</div>
	</aside>

	<main class="p-4 md:ml-64 h-auto pt-20">
		<div>
			<slot />
		</div>

	</main>
</div>