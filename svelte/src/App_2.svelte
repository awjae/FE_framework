<script>
    import Bindings from "./components/Bindings.svelte";
    import { onMount, onDestroy } from 'svelte';

	let photos = [];
    onMount(async () => {
		const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();
	});

    let counter = 0;
	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
<main>
    <h2>Page 2</h2>
    <Bindings></Bindings>
    <div class="photos">
        {#each photos as photo}
            <figure>
                <img src={photo.thumbnailUrl} alt={photo.title}>
                <figcaption>{photo.title}</figcaption>
            </figure>
        {:else}
            <!-- this block renders when photos.length === 0 -->
            <p>loading...</p>
        {/each}
        <p>{counter}</p>
    </div>
    
</main>
<style>

</style>