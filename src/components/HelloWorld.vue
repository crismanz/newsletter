<template>
  <div class="hello">
    <h1>Hello everyone,</h1>
    <h2>welcome to the newsletter subscription page</h2>
    <p>Please subscribe <router-link to="/subscription"><strong>here</strong></router-link> for our newsletter.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
