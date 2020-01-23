<script context="module">
  let scans = {};

  export function upcPicker() {
    if (!scans) {
      throw Error("No detected barcode.");
    }
    let upcs = Object.keys(scans);
    if (upcs.length == 0) {
      return upcs[0];
    }
    let upc = upcs[0];
    upcs.forEach(code => {
      if (scans[code] > scans[upc]) {
        upc = code;
      }
    });
    return upc;
  }
</script>

<script>
  import { onMount } from "svelte";
  import Quagga from "quagga";

  onMount(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 400,
            height: 400
          }
        },
        //locate: true,
        decoder: {
          readers: [{ format: "upc_reader", config: {} }]
        }
      },
      e => {
        if (e) console.log(e);
        Quagga.start();
      }
    );
    Quagga.onDetected(data => {
      let code = data.codeResult.code;
      if (scans.hasOwnProperty(code)) {
        scans[code] += 1;
      } else {
        scans[code] = 1;
      }
      console.log(scans);
    });

    return () => {
      Quagga.stop();
    };
  });
</script>

<style>
  #interactive {
    position: relative;
    top: 0;
    left: calc(50% - 200px);
    margin: 4rem auto;
  }
</style>

<div id="interactive" class="viewport" />
