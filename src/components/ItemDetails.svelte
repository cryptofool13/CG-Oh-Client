<script>
  export let scannedItem;
  let { upc, item, onHand, shelfCap, caseSz, price } = scannedItem;
</script>

<style>
  .scanner {
    width: 200px;
    height: 200px;
    background: #ddd;
  }
</style>

<div class="scanner" />
<button>Scan</button>
<p>UPC: {upc}</p>
<p>Item: {item}</p>
<p>On hand: {onHand}</p>
<p>Shelf capacity: {shelfCap}</p>
<p>Case size: {caseSz}</p>
<p>Price: {price}</p>
