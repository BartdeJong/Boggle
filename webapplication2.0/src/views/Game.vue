<template>
  <fullscreen :fullscreen.sync="fullscreen">
    <div class="game">
      <div class="field">
        <Timer @timer-start:log="timerStarted" @timer-stop:log="timerStopped"></Timer>
        <Board></Board>
        <div
          @click="this.submit" 
          class="submit" 
          :style="{ 
            backgroundColor: (getWord.length > 3) ? 'rgb(16, 133, 179)' : 'red',
            transform: (getWord.length > 3) ? '' : 'scale(1)'
          }"
        >Submit</div>
      </div>
      <div class="info">
        <div class="words score">
          <div class="valueIdentifier">Score:</div>
          <div class="value">{{ this.$store.getters.getScore }}</div>
          <div class="valueIdentifier">Current word:</div>
          <div class="value">{{ this.$store.getters.getWord }}</div>
          <button type="submit" @click="toggle">Fullscreen</button>
        </div>
        <div class="words guessed">
          <div class="valueIdentifier">Guessed words:</div>
          <div class="value">
            <div v-for="i in Math.min(this.getSavedWords.length, this.getListSize)" :key="i">
              <div
                :style="{
                color: (getSavedWords[i-1].correct) ? '#3eb72c' : 'red'
              }"
              >{{getSavedWords[i-1].word}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fullscreen>
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
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.score {
  height: 28vh;
  justify-content: center;
}
.guessed {
  height: 72vh;
}
.words {
  display: flex;
  flex-direction: column;
  width: 100%;
  float: right;
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
  .submit {
    box-shadow: none;
  }
  .words {
    width: 50%;
    justify-content: start;
    font-size: 13pt;
    height: 40vh;
    padding-top: 6px;
    .valueIdentifier {
      margin-top: 0vh;
    }
  }
  .game {
    flex-direction: column;
  }
  .submit {
    margin-top: 0.5vh;
  }
  .info {
    flex-direction: row;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import Die from "@/components/Die.vue";
import Board from "@/components/Board.vue";
import Timer from "@/components/Timer.vue";
import fullscreen from "vue-fullscreen";
import Vue from "vue";
Vue.use(fullscreen);

export default {
  name: "Game",
  computed: {
    ...mapGetters(["getSavedWords", "getWord"]),
    getListSize: function() {
      if (screen.width > 800) {
        return 20;
      } else {
        return 10;
      }
    }
  },
  data() {
    return {
      Size: 4,
      listSize: 0,
      fullscreen: false
    };
  },
  components: {
    Die,
    Board,
    Timer,
  },
  methods: {
    submit() {
      if(this.getWord.length > 3){
        this.$store.commit("SubmitWord");
        this.$emit("resetDie");
      }
    },
    toggle() {
      this.fullscreen = !this.fullscreen;
    },
    timerStarted() {
      console.log("Timer started");
    },
    timerStopped() {
      console.log("Timer stopped");
    },
  },
};
</script>