<!-- Card.svelte -->
<script>
    // @ts-nocheck

    // @ts-ignore
    export let title;
    // @ts-ignore
    export let imageUrl;
    // @ts-ignore
    export let description;
    // @ts-ignore
    export let id;
    export let walking;
    export let transit;
    export let distance;
</script>

<div class="bg-white rounded-lg overflow-hidden shadow-md p-4 mb-4">
    <a href="/apartment/{id}">
        <img src={imageUrl} alt={title} class="w-full h-32 object-cover mb-4" />
        <h3 class="text-xl font-semibold mb-2">{title}</h3>
        <div class="flex flex-row justify-between">
            <div class="flex flex-col">
                <strong><p class="text-gray-600">{description}</p></strong>
                <span class="text-gray-600">{distance} from campus</span>
            </div>
            <div class="flex flex-col">
                <span class="text-green-500">🚶‍♀️ {walking}</span>
                <span class="text-green-500">🚌 {transit}</span>
            </div>
        </div>
    </a>
</div>
