<script>
  import { beforeUpdate } from "svelte";

  import { user } from "../store/user";

  let loggedIn;

  beforeUpdate(() => {
    if (!$user) {
      let storage = localStorage.getItem("token");
      if (!storage) {
        loggedIn = false;
      } else {
        loggedIn = true;
        user.update(n => storage)
      }
    } else {
      loggedIn = true;
    }
  });

  function logout() {
    user.update(n => null);
    localStorage.removeItem("token");
  }
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
    {#if loggedIn}
      <a on:click={logout} href="/">Log out</a>
    {:else}
      <a href="/login">Log in</a>
    {/if}
  </li>
</ul>
