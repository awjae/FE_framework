<script>
	import Nested from './Nested.svelte';
	import Thing from './Thing.svelte';
	import Inner from './Inner.svelte';

	
	let name = "기본 이름";
	$: rename = "딸러 이름" + name;
	$: {
		console.log("useEffect 와 유사하게 사용 가능", name)
	}

	let user = { loggedIn: false };
	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	async function getRandomNumber() {
		const res = await fetch(`/tutorial/random-number`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}
	let promise = getRandomNumber();


	let m = { x: 0, y: 0 };
	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
	function handleClick() {
		alert('no more alerts')
	}

	import Outer from './Outer.svelte';
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={() => name = "바꾼이름"}>이름 바꾸기</button>
	<p>$rename { rename }</p>
	<Nested answer={42}></Nested>
	{#if user.loggedIn}
		<button on:click={toggle}>
			Log out
		</button>
	{:else}
		<button on:click={toggle}>
			Log in
		</button>
	{/if}
	{#each things as thing}
		<Thing name={thing.name}/>
	{/each}

	<br>

	{#await promise}
		<p>...waiting</p>
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
		The mouse position is {m.x} x {m.y}
	</div>
	<button on:click|once={handleClick}>
		Click me
	</button>

	<Outer on:message={handleMessage}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>