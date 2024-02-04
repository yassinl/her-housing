<!-- ApartmentCard.svelte -->
<script>
  export let apartment;
</script>

<div class="bg-white rounded-lg overflow-hidden shadow-md p-6">
  <img
    src={apartment.imageUrl}
    alt={apartment.address}
    class="w-full h-64 object-cover mb-6"
  />
  <h2 class="text-2xl font-semibold mb-2">{apartment.address}</h2>
  <p class="text-gray-600 mb-4">{apartment.description}</p>
  <div class="flex items-center justify-between mb-4">
    <span class="text-lg font-semibold">{apartment.rentPrice}/month</span>
    <span class="text-green-500">{apartment.safetyScore}/10 Safety Score</span>
  </div>
  <div>
    <h3 class="text-xl font-semibold mb-2">Pros</h3>
    <ul class="list-disc list-inside text-gray-600">
      {#each apartment.pros as pro (pro)}
        <li>{pro}</li>
      {/each}
    </ul>
  </div>
  <div class="mt-4">
    <h3 class="text-xl font-semibold mb-2">Cons</h3>
    <ul class="list-disc list-inside text-gray-600">
      {#each apartment.cons as con (con)}
        <li>{con}</li>
      {/each}
    </ul>
  </div>
</div>
