<script>
  let name;
  let password;

  async function login() {
    if (!name) {
      return;
    }
    if (!password) {
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
    console.log({ name, password });
    console.log(json);
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
</style>

<form on:submit|preventDefault={login}>
  <h2>Log in</h2>

  <fieldset>
    <label for="name">
      Username
      <input id="name" type="text" bind:value={name} autocomplete="off" />
    </label>
    <label for="password">
      Password
      <input id="password" type="password" bind:value={password} />
    </label>
    <input type="submit" />
  </fieldset>
</form>
