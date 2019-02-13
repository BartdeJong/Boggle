<template>
  <div class="Game">
    <div class="field">
      <Board></Board>
      <div class="words">
        <div class="score">10</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.field {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  float: left;
}
.words {
  display: flex;
  justify-content: center;
  width: 40%;
  float: right;
  height: calc(100vh - 500px);
}
.score {
  color: blue;
}
@media only screen and (max-width: 500px) {
  .field {
    width: 100%;
    height: 60vh;
  }
  .words {
    width: 100%;
    height: 30vh;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import Die from "@/components/Die.vue";
import Board from "@/components/Board.vue";

export default {
  name: "Game",
  data() {
    return {
      Size: 4
    };
  },
  components: {
    Die,
    Board
  }
};
</script>