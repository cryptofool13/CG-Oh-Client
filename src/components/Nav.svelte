<script>
  import { user } from "../store/user";
</script>

<style>

  ul {
    background: radial-gradient(at top center, #ddd, #ddddff);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    position: sticky;
    height: 10vh;
    top: 0;
    margin: 0 auto;
    width: 80vw;
    border-radius: 0 0 1rem 1rem;
  }
</style>

<ul>
  <li>
    <a href="/menu">Menu</a>
  </li>
  <li>
    <a href="/">Exit</a>
  </li>
  <li id="auth">
    {#if $user}
      <a href="/">Log out</a>
    {:else}
      <a href="/login">Log in</a>
    {/if}
  </li>
</ul>
