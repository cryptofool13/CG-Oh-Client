<script>
  import { user } from "../store/user";
</script>

<style>
  header {
    margin: 0 auto;
    width: 60vw;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
</style>

<header>
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
</header>
