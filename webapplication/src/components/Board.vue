<template>
  <div class="Board">
    <die 
    v-for="i in 16" 
    :key="i" 
    class="die"
    @hover="HoverWord()"
    @add="AddLetter"
    @remove="RemoveLetter"
    ></die>
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
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import Die from "@/components/Die.vue";

export default {
  name: "Board",
  data() {
    return {
      Size: 4,
      Word: "",
    };
  },
  components: {
    Die
  },
  methods: {
      AddLetter(letter){
          this.Word += letter;
          console.log(this.Word);
      },
      RemoveLetter(letter){
          this.Word = this.Word.replace(letter, "");
          console.log(this.Word);
      },
      HoverWord(){
          console.log("now following mouse");
      }
  }
};
</script>