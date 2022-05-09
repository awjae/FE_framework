<script>
	import { count } from '../store/stores.js';

	function reset() {
        count.set(0);
    }
</script>

<button on:click={reset}>
	reset
</button>