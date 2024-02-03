<Header></Header>

<script>
	import "../app.pcss";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/styles/style.css';
</script>

<main>
	<slot></slot>
</main>

<Footer></Footer>


