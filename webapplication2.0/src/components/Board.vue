<template>
  <div class="Board">
    <die v-for="i in 16" :key="i" class="die" @hover="HoverWord()"></die>
  </div>
</template>

<style <style lang="scss" scoped>
table {
  border-spacing: 0.7vw;
  box-shadow: 7px 7px 16px grey;
}
.Board {
  display: flex;
  width: 500px;
  height: 500px;
  flex-wrap: wrap;
  box-shadow: -10px 20px 71px 3px;
}

@media only screen and (max-width: 500px) {
  .Board {
    width: 250px;
    height: 250px;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import Die from "@/components/Die.vue";

export default {
  name: "Board",
  data() {
    return {
      Size: 4
    };
  },
  components: {
    Die
  },
  methods: {}
};
</script>