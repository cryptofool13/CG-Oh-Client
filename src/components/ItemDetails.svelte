<script>
  export let scannedItem;
  export let action;

  let { item, on_hand, case_sz, price, shelf_cap, error } = scannedItem;
</script>

<style>
  .details {
    width: 50%;
  }
  .details p {
    display: flex;
    justify-content: space-between;
  }
</style>

{#if error}
  {error}
{:else}
<div class="details">
  <p>
    <span>Item:</span>
    {item}
  </p>
  <p>
    <span>Case size:</span>
    {case_sz}
  </p>
  {#if action == 'count'}
    <p>
      <span>Shelf capacity:</span>
      {shelf_cap}
    </p>
  {:else}
    <p>
      <span>On hand:</span>
      {on_hand}
    </p>
  {/if}
  <p>
    <span>Price:</span>
    {price.toFixed(2)}
  </p>
</div>

{#if action == 'count'}
  <label for="on_hand">
    On hand:
    <input id="on_hand" type="number" bind:value={on_hand} />
  </label>
{:else}
  <label for="shelf_cap">
    Shelf Cap:
    <input type="number" id="shelf_cap" bind:value={shelf_cap} />
  </label>
  {/if}
{/if}
