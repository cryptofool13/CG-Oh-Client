<script>
  import { user } from "../store/user";

  let name;
  let password;

  let noName;
  let noPass;

  let error;
  
  async function login() {
    error = null;
    noName = false;
    noPass = false;
    if (!name) {
      noName = true;
    }
    if (!password) {
      noPass = true;
    }
    if (noName || noPass) {
      return;
    }
    try {
      let response = await fetch("http://192.168.1.7:8080/api/v1/auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ name, password })
      });
      let json = await response.json();
      if (json.error) {
        error = json.error;
        return;
      }
      user.update(n => json.token);
      localStorage.setItem("token", json.token);
      // set $user store as token
      // handle errors from server
      name = "";
      password = "";

      history.back();
    } catch (e) {
      console.log(e);
    }
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    margin: 0 auto;
  }
  fieldset {
    padding: 1rem;
    border-radius: 1rem;
  }
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input[type="text"],
  input[type="password"] {
    /* width: 24ch; */
    margin-left: 1rem;
    border-radius: 0.5rem;
    background: #ddd;
  }
  input[type="submit"] {
    display: block;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background: lightblue;
  }
  input.noName,
  input.noPass {
    background: lightpink;
  }
  .errors {
    padding: 1rem;
    color: red;
  }
</style>

<form on:submit|preventDefault={login}>
  <h2>Log in</h2>

  <fieldset>
    <label for="name">
      Username
      <input
        class:noName
        id="name"
        type="text"
        bind:value={name}
        autocomplete="off" />
    </label>
    <label for="password">
      Password
      <input class:noPass id="password" type="password" bind:value={password} />
    </label>
    <input type="submit" />
  </fieldset>
  <p class="errors">

    {#if error}{error}{/if}
    {#if noName}Please enter your name.{/if}
    <br />
    {#if noPass}Please enter your password.{/if}
  </p>
</form>
