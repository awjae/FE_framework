import App from './App_3.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;