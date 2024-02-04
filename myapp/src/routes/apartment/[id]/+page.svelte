<!-- ApartmentPage.svelte -->
<script>
    import ApartmentCard from "$lib/components/ApartmentCard.svelte";

    export let data;

    let apartment = {
      imageUrl: data.imageUrl,
      address: data.address,
      description: data.description,
      rentPrice: data.rentPrice,
      safetyScore: 8.5,
      // pros: ['Spacious rooms', 'Modern amenities', 'Close to public transportation'],
      // cons: ['Limited parking space', 'No pet-friendly policy'],
      pros: data.pros,
      cons: data.cons
    };
  </script>
  
  <div class="container mx-auto mt-8">
    <ApartmentCard {apartment} />
  </div>