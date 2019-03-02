<template>
  <div class="Timer">{{this.timer}}</div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Timer",
  data() {
    return {
      startTime: '',
      timer: 0,
    };
  },
  computed: {
    ...mapGetters(["getGameTime"]),
    // time() {
    //     return Date.now();// - this.startTime;
    // },
  },
  methods: {
      time() {
          this.timer = Date.now();
      },
  },
  created() {
      this.startTime = Date.now();
  },
  mounted() {
      this.time();
  },
};
</script>