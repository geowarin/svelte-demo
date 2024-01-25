interface ChuckNorrisFact {
	icon_url: string;
	id: string;
	url: string;
	value: string;
}

export async function fetchJoke(): Promise<ChuckNorrisFact> {
	// Fetch a random number between 0 and 100
	// (with a delay, so that we can see it)
	const res = await fetch('https://api.chucknorris.io/jokes/random');

	if (res.ok) {
		return await res.json();
	} else {
		// Sometimes the API will fail!
		throw new Error('Request failed');
	}
}
