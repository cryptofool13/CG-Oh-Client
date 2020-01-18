<script>
  import { onMount } from "svelte";

  import { user } from "../store/user";

  onMount(() => {
    if (!$user) {
      window.location = "http://192.168.1.7:3000";
    }
  });
</script>

<style>
  a {
    background: lightblue;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    width: 50%;
    text-align: center;
  }
</style>

<a href="/count">Cycle Count</a>

<a href="/display">Display Collection</a>
