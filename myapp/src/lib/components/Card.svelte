<!-- Card.svelte -->
<script>
// @ts-nocheck

    // @ts-ignore
    export let title;
    // @ts-ignore
    export let imageUrl;
    // @ts-ignore
    export let description;
  </script>
  
  <div class="bg-white rounded-lg overflow-hidden shadow-md p-4 mb-4">
    <img src={imageUrl} alt={title} class="w-full h-32 object-cover mb-4" />
    <h3 class="text-xl font-semibold mb-2">{title}</h3>
    <p class="text-gray-600">{description}</p>
  </div>