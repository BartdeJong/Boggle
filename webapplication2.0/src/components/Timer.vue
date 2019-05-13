<template>
  <div class="Timer clock">{{this.time}}</div>
</template>

<style lang="scss">
.clock {
    color: black;
    font-size: 45px;
    font-family: Orbitron;
    letter-spacing: 7px;
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Timer",
  data() {
    return {
      timer: "",
      alerted: false,
    };
  },
  computed: {
    ...mapGetters(["getGameTime"]),
  },
  methods: {
    secondPasses() {
      this.timer = this.timer - 1;
      if(this.timer < 0){
        this.timer = 0;
        if(!this.alerted){
          window.alert("Your score is " + this.$store.getters.getScore + "\nPlease press OK to restart");
          this.alerted = true;
        }
        location.reload();
      }
    },
  },
  mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
                this.secondPasses();
            },1000);
        })
  },
  created() {
    this.timer = prompt("For how long do you want to play:", "180");
  },
  computed:{
	  time(){
		  	var minutes = Math.floor(this.timer / 60);
			var seconds = this.timer - minutes * 60;

			if (minutes < 10) { minutes = "0" + minutes; }
			if (seconds < 10) { seconds = "0" + seconds; }
			return minutes + ':' + seconds;
	  }
  }
};
</script>