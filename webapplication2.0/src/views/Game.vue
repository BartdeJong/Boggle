<template>
  <div class="game">
    <div class="field">
      <Board></Board>
      <div @click="this.submit" class="submit">Submit</div>
    </div>
    <div class="words">
      <div class="valueIdentifier">Score:</div>
      <div class="value">{{ this.$store.getters.getScore }}</div>
      <div class="valueIdentifier">Current word:</div>
      <div class="value">{{ this.$store.getters.getWord }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.game {
  display: flex;
  flex-wrap: nowrap;
}
.field {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  float: left;
}
.words {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  float: right;
  height: calc(100vh - 500px);
  font-size: 20pt;
  align-items: center;
  .valueIdentifier {
    color: rgb(163, 125, 0);
    width: 30vw;
  }
  .value {
    width: 80%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
}
.submit {
  box-shadow: -10px 20px 71px 3px black;
  background-color: rgb(16, 133, 179);
  color: white;
  margin-top: 15vh;
  padding: 2vh;
  font-size: 20pt;
  transition-duration: 0.5s;
}
.submit:hover {
  transform: scale(1.2);
}

@media only screen and (max-width: 500px) {
  .field {
    height: 50vh;
  }
  .words {
    width: 100%;
    .valueIdentifier {
      margin-top: 0vh;
    }
  }
  .game {
    flex-direction: column
  }
  .submit {
    margin-top: 0.5vh;
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
  },
  methods: {
    submit() {
      this.$store.commit("SubmitWord");
      this.$emit("resetDie");
    }
  }
};
</script>