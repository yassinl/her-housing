<script>
    import { Search, Button } from 'flowbite-svelte';
    import { MicrophoneSolid, SearchOutline } from 'flowbite-svelte-icons';
    function handleVoiceBtn() {
      alert('You clicked voice button');
    }
  </script>
  
  <div>
  <form class="flex gap-2">
    <Search size="md" class="" placeholder="Search for an awesome place to live">
    </Search>

  </form>

</div>