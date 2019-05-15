<template>
  <div id="app">
    <div id="nav"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  overflow: hidden;
}

#nav {
  padding: 30px;
  position: absolute;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import Board from "@/components/Board.vue";
import Die from "@/components/Die.vue";
import Game from "@/views/Game.vue";

export default {
  components: {
    Die,
    Board,
    Game
  }
};

import { register } from 'register-service-worker'
 
register('/service-worker.js', {
  registrationOptions: { scope: './' },
  ready (registration) {
    console.log('Service worker is active.')
  },
  registered (registration) {
    console.log('Service worker has been registered.')
  },
  cached (registration) {
    console.log('Content has been cached for offline use.')
  },
  updatefound (registration) {
    console.log('New content is downloading.')
  },
  updated (registration) {
    console.log('New content is available; please refresh.')
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (error) {
    console.error('Error during service worker registration:', error)
  }
})
</script>