<script>
	import { AddressCardSolid } from 'flowbite-svelte-icons';
	import { base } from '$app/paths';

	export let link = "#"
</script>

<li>
	<a
		href="{base}/{link}"
		class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
	>
		<slot name="icon">
			<AddressCardSolid aria-hidden="true" fill="currentColor" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		</slot>
		<span class="ml-3">
			<slot />
		</span>
	</a>
</li>