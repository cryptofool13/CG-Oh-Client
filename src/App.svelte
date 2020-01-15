<script>
  import router from "page";

  import Nav from "./components/Nav.svelte";
  import Start from "./pages/start.svelte";
  import Login from "./pages/login.svelte";
  import NotFound from "./pages/notFound.svelte";
  import { user } from "./store/user";

  let props = {
    component: Start,
    loggedIn: $user ? true : false
  };

  router("/", () => {
    props = {
      component: Start,
      loggedIn: $user ? true : false
    };
  });

  router("/login", () => {
    props = {
      component: Login
    };
  });
  router()

  router("*", () => {
    props = {
      component: NotFound
    };
  });
  router.start();
</script>

<style>
  .container {
    margin: 0 auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
</style>

<Nav />
<div class="container">
  <svelte:component this={props.component} {...props} />
</div>
