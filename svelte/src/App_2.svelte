<script>
    import Bindings from "./components/Bindings.svelte";
    import { onMount } from 'svelte';

	let photos = [];
    onMount(async () => {
		const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();
	});
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
    </div>
    
</main>
<style>

</style>