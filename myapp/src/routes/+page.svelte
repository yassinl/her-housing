<script>
  import { Alert } from "flowbite-svelte";
  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";
  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
  import SearchBar from "$lib/components/SearchBar.svelte";
  import SearchBar2 from "$lib/components/SearchBar2.svelte";
  import Title from "$lib/components/Title.svelte";

  import { Heading, P } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import HousingGrid from "$lib/components/HousingGrid.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import GenericSearch from "$lib/components/GenericSearchBar.svelte";
  import PriceSlider from "$lib/components/PriceSlider.svelte";
  import SizeSlider from "$lib/components/SizeSlider.svelte";
  // import GenericSearchBar from "$lib/components/GenericSearchBar.svelte";

  export let data;
</script>

<Title />
<div class="mx-auto w-1/2 relative">
  <SearchBar />
  <SearchBar2 />
</div>

<div class="mx-auto w-1/2 relative">
  <Dropdown />
</div>

<div class="mx-auto w-1/2 relative">
  <PriceSlider />
  <SizeSlider />
</div>

<div class="">
  <HousingGrid cards={data.cards} />
</div>
