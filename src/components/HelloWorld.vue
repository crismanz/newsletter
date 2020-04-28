<template>
  <div class="hello">
    <h1>Hello everyone,</h1>
    <h2>welcome to the newsletter subscription page</h2>
    <p>Please subscripte <router-link to="/subscription">here</router-link> for our newsletter.</p>
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
