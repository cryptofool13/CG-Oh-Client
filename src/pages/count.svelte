<script>
  import ItemDetail from "../components/ItemDetails.svelte";
  import Scanner, { upcPicker } from "../components/Scanner.svelte";

  import { getItem, isValidUpc, updateItem } from "../services/item";
  import { user } from "../store/user";

  let upc = "";
  let item;
  let errors;

  function handleUpdate() {}

  function handleScan() {
    upc = upc ? upc : upcPicker();
    try {
      if (!upc) {
        throw Error("Scan a barcode or enter a UPC.");
      }
      if (!isValidUpc(upc)) {
        throw Error(`Invalid UPC: ${upc}`);
      }
      item = getItem(upc, $user);
      item
        .then(res => {
          if (res.error) {
            throw Error(res.error);
          }
          item = res;
        })
        .catch(e => {
          console.log(e);
        });
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
</style>

<div class="scanner">
  <Scanner />
</div>

{#if item}
  {#await item}
    loading
  {:then data}
    <ItemDetail action={'count'} scannedItem={data} />
  {:catch error}
    something went wrong: {error}
  {/await}
{/if}

<label for="upc">
  Upc:
  <input type="text" id="upc" bind:value={upc} />
</label>

<button on:click={handleScan}>scan</button>

<p bind:this={errors} class="errors" />
