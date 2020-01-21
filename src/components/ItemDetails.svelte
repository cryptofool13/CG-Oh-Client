<script>
  export let scannedItem;
  let { item, on_hand, shelf_cap, case_sz, price } = scannedItem;
</script>

<style>
  .scanner {
    width: 150px;
    height: 150px;
    background: #ddd;
  }
  .details {
    width: 50%;
  }
  .details p {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="details">
  <p>
    <span>Item:</span>
    {item}
  </p>
  <p>
    <span>Case size:</span>
    {case_sz}
  </p>
  <p>
    <span>Price:</span>
    {price.toFixed(2)}
  </p>
  <p>
    <span>Shelf capacity:</span>
    {shelf_cap}
  </p>
</div>

<label for="on_hand">
  On hand:
  <input id="on_hand" type="number" bind:value={on_hand} />
</label>
