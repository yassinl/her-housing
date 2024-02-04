<!-- CardGrid.svelte -->
<script>
    import Card from "./Card.svelte";

    export let cards;
</script>

<div class="container mx-auto mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each cards as card (card.title)}
            <Card {...card} />
        {/each}
    </div>
</div>
