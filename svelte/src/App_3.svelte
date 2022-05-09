<script>
	import { count } from './store/stores.js';
	import Incrementer from './components/Incrementer.svelte';
	import Decrementer from './components/Decrementer.svelte';
	import Resetter from './components/Resetter.svelte';

	let countValue;

	count.subscribe(value => {
		countValue = value;
	});
</script>

<h1>The count is {countValue}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>
