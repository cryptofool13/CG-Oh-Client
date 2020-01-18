<script>
  import ItemDetail from "../components/ItemDetails.svelte";

  let scannedItem = {
    upc: "121212121212",
    item: "brocoli",
    onHand: 3,
    shelfCap: 10,
    caseSz: 1,
    price: 1.0
  };
</script>

<style>

</style>

<ItemDetail {scannedItem} />
