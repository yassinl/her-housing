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
    <div class="flex flex-col">
      <span class="text-green-500 text-lg font-semibold">{apartment.safetyScore}/10 Safety Score</span>
      <span class="text-blue-500 text-lg font-semibold">{apartment.commute} commute</span>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h3 class="text-xl font-semibold mb-2">Pros</h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each apartment.pros as pro (pro)}
          <li>{pro}</li>
        {/each}
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Cons</h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each apartment.cons as con (con)}
          <li>{con}</li>
        {/each}
      </ul>
      <div class="mt-4">
        <h3 class="text-xl font-semibold mb-2">Contact Seller</h3>
        <p class="text-gray-600">For more information or to schedule a viewing, contact the seller:</p>
        <div class="mt-4">
          <p class="text-lg font-semibold">Seller Information</p>
          <ul class="list-disc list-inside text-gray-600">
            <li>Phone: {apartment.phone}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-accent p-4 rounded-md">
      <h3 class="text-xl font-semibold mb-2">Amenities</h3>
      <div class="grid grid-cols-2 gap-2">
        {#each apartment.amenities as { name, items } (name)}
          <div class="mb-4">
            <p class="text-lg font-semibold">{name}</p>
            <ul class="list-disc list-inside text-green-500">
              {#each items as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
