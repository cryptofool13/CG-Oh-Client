<script>
  import { onMount } from "svelte";
  import Quagga from "quagga";

  let scans = {}

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
        // Quagga.start();
      }
    );
    Quagga.onDetected(data => {
      let code = data.codeResult.code
      if(scans[code]) {
        scans[code]+=1
      }else{
      scans[code] = 1
      }
      console.log(scans);
    });

    return () => {
      Quagga.stop();
    };
  });

  function scan() {
    Quagga.start()
    setTimeout(() => {
      Quagga.pause()
    }, 1500)
  }
</script>

<style>
  #interactive {
    width: 200px;
    height: 200px;
  }
</style>

<button on:click={scan}>Scan</button>

<div id="interactive" class="viewport" />
