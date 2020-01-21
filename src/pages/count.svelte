<script>
  import ItemDetail from "../components/ItemDetails.svelte";
  import Scanner from "../components/Scanner.svelte";

  import { getItem, isValidUpc } from "../services/scanner";
  import { user } from "../store/user";

  let upc = "";
  let item;
  let errors;

  function handleScan() {
    try {
      if (!upc) {
        throw Error("Scan a barcode or enter a UPC.");
      }
      if (!isValidUpc(upc)) {
        throw Error(`Invalid UPC: ${upc}`);
      }
      item = getItem(upc, $user);
    } catch (err) {
      errors.innerText = err.message;
    }
  }
</script>

<style>
  .errors {
    padding: 1rem;
    color: red;
  }

  .scanner {
    width: 200px;
  }
</style>

<div class="scanner">
  <Scanner />
</div>

{#if item}
  {#await item}
    loading
  {:then data}
    <ItemDetail scannedItem={data} />
  {/await}
{/if}
<label for="upc">
  Upc:
  <input type="text" id="upc" bind:value={upc} />
</label>
<p bind:this={errors} class="errors" />
<button on:error={e => console.log(e)} on:click={handleScan}>scan</button>
