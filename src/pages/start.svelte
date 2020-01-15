<script>
  export let loggedIn;
</script>

<style>
  
</style>

<h1>CG - OH</h1>
<div class="buttons">
  {#if !loggedIn}
    <a href="/login">Log in</a>
  {:else}
    <a href="/menu">Start</a>
  {/if}
</div>
