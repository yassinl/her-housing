<script>
    import { Search, Button, CardPlaceholder } from 'flowbite-svelte';
    import { MicrophoneSolid, SearchOutline } from 'flowbite-svelte-icons';
    function handleVoiceBtn() {
      alert('You clicked voice button');
    }
  </script>
  
  <div>
  <form class="flex gap-2">
    <Search size="md" class="" placeholder="Location">
    </Search>

  </form>

</div>