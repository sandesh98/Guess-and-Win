<template>
  <div id="app">
    <transition name="router-animate" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
  /* @import "https://cdn.jsdelivr.net/npm/animate.css@3.7.0/animate.min.css"; */

</style>
