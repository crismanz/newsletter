<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/subscription">Subscription</router-link> |
      <router-link to="/privacy">Privacy Policy</router-link>
    </div>
  <div class="content">
    <router-view/>
  </div>
     <footer><hr>
      <p>Contact information: 
        <a href="mailto:someone@example.com">someone@example.com</a>
      </p>
    </footer> 
  </div>
</template>

<style>
#app {
 font-family: Courier, Monaco, monospace;
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

.content {
  padding-bottom: 50px;
}

footer {
 position:fixed;
 bottom:0;
 width: 60%;
 background-color: white;
}

@media only screen and (max-width: 530px) {
  #app {
    width: 90%;
  }
}
</style>
