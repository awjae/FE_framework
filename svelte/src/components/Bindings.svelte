<script>
import { onMount } from "svelte";


    let name = 'world';
    let a = 1;
    let flavours = ['Mint choc chip'];
    let html = '<p>Write some text!</p>';
    let size = 42;
    let element;

    onMount(() => {
        element.innerText = "bind:this";
    })
</script>
<article>
    <input bind:value={name}>
    <h1>Hello {name}!</h1>
    <label>
        <input type=number bind:value={a} min=0 max=10>
        <input type=range bind:value={a} min=0 max=10>
    </label>
    <h1>{a}</h1>
    <label>
        <input type=checkbox bind:group={flavours} name="flavours" value="Cookies and cream">
        Cookies and cream
    </label>
    
    <label>
        <input type=checkbox bind:group={flavours} name="flavours" value="Mint choc chip">
        Mint choc chip
    </label>
    
    <label>
        <input type=checkbox bind:group={flavours} name="flavours" value="Raspberry ripple">
        Raspberry ripple
    </label>
    <h2>{ flavours }</h2>
    <div contenteditable="true" bind:innerHTML={html}></div>
    <pre>{html}</pre>
    <div>
        <span style="font-size: {size}px">{html}</span>
    </div>
    <input type=range bind:value={size}>
    <p bind:this={element}></p><!-- this = ref -->
</article>
<style>
    [contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>