<template>
  <div class="home">
    <router-link to="/subscription"><div class="envelope"/></router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.envelope {
  width: 135px;
  height: 150px;
  background: url("../assets/envelope.png") no-repeat;
  margin-left: auto;
  margin-right: auto;
}

.envelope:hover {
  background: url("../assets/web.png") no-repeat;
}
</style>
