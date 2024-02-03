<!-- ApartmentPage.svelte -->
<script>
    import ApartmentCard from "$lib/components/ApartmentCard.svelte";
  
    let apartment = {
      imageUrl: 'path/to/apartment-image.jpg',
      address: '123 Main St, Cityville',
      description: 'A beautiful apartment with great amenities and a stunning view.',
      rentPrice: 1500,
      safetyScore: 8.5,
      pros: ['Spacious rooms', 'Modern amenities', 'Close to public transportation'],
      cons: ['Limited parking space', 'No pet-friendly policy'],
    };
  </script>
  
  <div class="container mx-auto mt-8">
    <ApartmentCard {apartment} />
  </div>