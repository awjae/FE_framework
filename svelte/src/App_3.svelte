<script>
	import { count } from './store/stores.js';
	import { time } from './store/readStore.js';
	import Incrementer from './components/Incrementer.svelte';
	import Decrementer from './components/Decrementer.svelte';
	import Resetter from './components/Resetter.svelte';

	let countValue;

	count.subscribe(value => {
		countValue = value;
	});


	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>The count is {countValue}</h1>
<Incrementer/>
<Decrementer/>
<Resetter/>


<h1>The time is {formatter.format($time)}</h1>