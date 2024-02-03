<script>
  import { Alert } from 'flowbite-svelte';
  import { MicrophoneSolid, SearchOutline } from 'flowbite-svelte-icons';
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
  import SearchBar from '$lib/components/SearchBar.svelte';
  import Title from '$lib/components/Title.svelte';
  import Properties from '$lib/components/AvailableProperties.svelte';

  import { Heading, P } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';



</script>


<Title/>
<SearchBar/>


<style>


</style>
  
  <main class="container">

    <div class="mx-auto w-1/2 relative">
      <h1>Find Your Dream Home</h1>
      <p>
        We're working to empower women !!!!
      </p>
    
      <h2>Contact Us</h2>
      <p>
        Email: contact@example.com<br />
        Phone: 123-456-7890
      </p>
    </div>
    <div class="flex items-center justify-center">
    <Properties/>
    </div>
    
  















  </main>
  
  