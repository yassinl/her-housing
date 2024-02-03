<!-- CardGrid.svelte -->
<script>
    import Card from "./Card.svelte";

    let cards = [
        {
            title: "Card 1",
            imageUrl: "path/to/image1.jpg",
            description: "Description for Card 1",
        },
        {
            title: "Card 2",
            imageUrl: "path/to/image2.jpg",
            description: "Description for Card 2",
        },
        {
            title: "Card 3",
            imageUrl: "path/to/image3.jpg",
            description: "Description for Card 3",
        },
        // Add more cards as needed
    ];
</script>

<div class="container mx-auto mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each cards as card (card.title)}
            <Card {...card} />
        {/each}
    </div>
</div>
