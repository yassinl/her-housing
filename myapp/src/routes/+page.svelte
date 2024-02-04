<script>
  import { Alert } from "flowbite-svelte";
  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";
  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
  import SearchBar from "$lib/components/SearchBar.svelte";
  import Title from "$lib/components/Title.svelte";

  import { Heading, P } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import HousingGrid from "$lib/components/HousingGrid.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";

  export let data;
</script>

<Title />
<div class="mx-auto w-1/2 relative">
  <SearchBar/>
</div>


<Dropdown/>


<div class="py-96">
  <HousingGrid cards={data.cards} />
</div>


<main class="container">
  <h1>Find Your Dream Home</h1>
  <p>We're working to empower women !!!!</p>

  <h2>Contact Us</h2>
  <p>
    Email: contact@example.com<br />
    Phone: 123-456-7890
  </p>
</main>

<style>


</style>
