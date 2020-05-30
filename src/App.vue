<template>
  <div id="app" class="section">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"


export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
