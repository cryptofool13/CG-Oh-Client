<script>
  let name;
  let password;

  let nameError;
  let passError;

  async function login() {
    nameError = false;
    passError = false;
    if (!name) {
      nameError = true;
    }
    if (!password) {
      passError = true;
    }
    if (nameError || passError) {
      return;
    }
    let response = await fetch("http://localhost:8080/api/v1/auth/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({ name, password })
    });
    let json = await response.json();
    console.log(json);
    // set $user store as token
    // handle errors from server
    name = "";
    password = "";
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
    width: 24ch;
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
  input.nameError,
  input.passError {
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
        class:nameError
        id="name"
        type="text"
        bind:value={name}
        autocomplete="off" />
    </label>
    <label for="password">
      Password
      <input
        class:passError
        id="password"
        type="password"
        bind:value={password} />
    </label>
    <input type="submit" />
  </fieldset>
  <p class="errors">
    {#if nameError}Please enter your name.{/if}
    <br />
    {#if passError}Please enter your password.{/if}
  </p>
</form>
