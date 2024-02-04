<!-- ApartmentPage.svelte -->
<script>
    import ApartmentCard from "$lib/components/ApartmentCard.svelte";

    export let data;

    let apartment = {
      imageUrl: data.imageUrl,
      address: data.address,
      description: data.description,
      rentPrice: data.rentPrice,
      safetyScore: data.safety,
      pros: data.pros,
      cons: data.cons,
      commute: data.commuteTime,
      amenities: data.amenities
    };
  </script>
  
  <div class="container mx-auto mt-8">
    <ApartmentCard {apartment} />
  </div>