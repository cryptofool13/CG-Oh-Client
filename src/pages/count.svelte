<script>
  import ItemDetail from "../components/ItemDetails.svelte";
  import Scanner from "../components/Scanner.svelte";

  import { getItem, isValidUpc } from "../services/scanner";
  import { user } from "../store/user";
  let upc = "121212121212";
  let item;

  function handleScan() {
    if (!isValidUpc(upc)) {
      throw Error(`invalid UPC: ${upc}`);
    }
    item = getItem(upc, $user);
  }
</script>

<style>

</style>

{#if item}
  {#await item}
    loading
  {:then data}

    <ItemDetail scannedItem={data} />
  {/await}
{/if}
<button on:click={handleScan}>scan</button>
