<script>
  import { user } from "../store/user";
</script>

<style>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 2rem;
  }
  a {
    background: lightblue;
    padding: .5rem 1rem;
    border-radius: .5rem; 
  }
</style>

<section>
  <h1>CG - OH</h1>
  <div class="buttons">
    {#if !$user}
      <a href="/login">Log in</a>
    {:else}
      <a href="/menu">Start</a>
    {/if}
  </div>
</section>
 