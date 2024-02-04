<!-- YourComponent.svelte -->

<style>
  .page-title {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  .page-description {
    font-size: 16px;
    color: #777;
    margin-bottom: 20px; /* Add a margin at the bottom of the description */
  }

  .apartment-list {
    list-style: none;
    padding: 0;
    margin-bottom: 0px;
  }

  .apartment-item {
    margin-bottom: 20px;
  }

  .apartment-details {
    font-size: 14px;
    color: #777;
  }

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #000;
  }
</style>

<div class="container">
  <h1 class="page-title">Apartment Contacts</h1>
  <p class="page-description">Explore contact details for various apartments in the area.</p>

  <ul class="apartment-list">
    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">Highlands Apartments</a>
      </h2>
      <p class="apartment-details">535 Blackrock Dr</p>
      <p class="apartment-details">Phone: (540) 385-4585</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">University Terrace</a>
      </h2>
      <p class="apartment-details">1208 L University Terrace</p>
      <p class="apartment-details">Phone: (540) 418-1477</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">Echols Village</a>
      </h2>
      <p class="apartment-details">1709 Aden Lane</p>
      <p class="apartment-details">Phone: (540) 418-3679</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">Cedar Hill</a>
      </h2>
      <p class="apartment-details">Cedar Hill</p>
      <p class="apartment-details">Phone: (540) 418-1326</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">RutherFord Townhomes</a>
      </h2>
      <p class="apartment-details">808 Patrick Henry Drive</p>
      <p class="apartment-details">Phone: (540) 418-3860</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">Fox Ridge homes</a>
      </h2>
      <p class="apartment-details">750 Hethwood Blvd</p>
      <p class="apartment-details">Phone: (540) 385-4449</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">Pheasant Run Townhomes</a>
      </h2>
      <p class="apartment-details">107 Mount Tabor Road</p>
      <p class="apartment-details">Phone: (540) 418-1970</p>
    </li>

    <li class="apartment-item">
      <h2 class="apartments-header">
        <a target="_blank">Windsor Hills Apartment</a>
      </h2>
      <p class="apartment-details">200 Hampton Court</p>
      <p class="apartment-details">Phone: (540) 418-1134</p>
    </li>
  </ul>
</div>
