<script>
    import Bindings from "./components/Bindings.svelte";
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

	let photos = [];
    onMount(async () => {
		const res = await fetch(`https://fakestoreapi.com/products/1`);
		const result = await res.json();
        photos = [
            {
                thumbnailUrl: 'http://www.gameple.co.kr/news/photo/202204/202396_204556_2732.png',
                title: '엘가시아'
            },
            {
                thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYb1yNB5j1NiAvn3QJNSjQ8T2-gyi2729kw&usqp=CAU',
                title: '라우리엘'
            }
        ];
	});

    let counter = 0;
	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));

    let div;
    let autoscroll;

    beforeUpdate(() => {
        autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
    });

    afterUpdate(() => {
        if (autoscroll) div.scrollTo(0, div.scrollHeight);
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
        <p>{counter}</p>
    </div>
    
</main>
<style>

</style>