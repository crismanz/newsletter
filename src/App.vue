<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/subscription">Subscription</router-link> |
      <router-link to="/privacy">Privacy Policy</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  color: #42b983;
}

a:hover {
  color: #42b983;
  text-decoration: underline;
}
h1 {
  padding: 20px;
}

@media only screen and (max-width: 530px) {
  #app {
    width: 90%;
  }
}
</style>
