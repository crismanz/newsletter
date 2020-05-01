<template>
  <div class="hello">
    <h1>Hello everyone,</h1>
    <h2>welcome to the newsletter subscription page</h2>
    <p>Please subscribe <router-link to="/subscription"><strong>here</strong></router-link> for our newsletter.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
h1 {
  color: #42b983;
  font-weight: bold;
}
p {
  padding: 20px;
}
</style>
