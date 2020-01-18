

<script>
  import { beforeUpdate } from "svelte";

  let Quagga

  beforeUpdate(async () => {
    // Quagga = await import('quagga')
    console.log(Quagga)
  });
</script>

<style>

</style>

<div id="interactive" class="viewport" />
