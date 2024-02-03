<script>
  import { Search, Button } from 'flowbite-svelte';
  import { MicrophoneSolid, SearchOutline } from 'flowbite-svelte-icons';
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<style>
</style>
  
  <main class="container">
    <h2>About Us</h2>
    <p>
      We're working to empower women !!!!
    </p>
  
    <h2>Contact Us</h2>
    <p>
      Email: contact@example.com<br />
      Phone: 123-456-7890
    </p>

    <form class="flex gap-2">
      <Search size="md" class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
        <button type="button" on:click={handleVoiceBtn} class="outline-none">
          <MicrophoneSolid class="w-4 h-4 me-2" />
        </button>
      </Search>
      <Button size="sm">
        <SearchOutline class="w-5 h-5 me-2 -ms-1" />
        Search
      </Button>
    </form>














  </main>
  
  