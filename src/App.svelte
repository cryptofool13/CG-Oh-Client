<script>
  import router from "page";

  import Nav from "./components/Nav.svelte";
  import Start from "./pages/start.svelte";
  import Login from "./pages/login.svelte";
  import NotFound from "./pages/notFound.svelte";
  import Menu from "./pages/menu.svelte";
  import Count from './pages/count.svelte';
  import Display from './pages/display.svelte';
  import { user } from "./store/user";

  let props = {
    component: Start
  };

  router("/", () => {
    props = {
      component: Start
    };
  });

  router("/login", () => {
    props = {
      component: Login
    };
  });

  router('/menu', () => {
    props = {
      component: Menu
    }
  });

  router('/count', () => {
    props = {
      component: Count
    }
  })

  router('/display', () => {
    props = {
      component: Display
    }
  })

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
    position: sticky;
    top: 0;
    width: 80vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
</style>

<Nav />

<div class="container">
  <svelte:component this={props.component} {...props} />
</div>
