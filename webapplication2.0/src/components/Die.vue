<template>
  <div
    @click="(IsSelected(dieNumber)) ? Remove() : Add()"
    @resetDie="Remove()"
    class="Die"
    :style="{
        backgroundColor: (IsSelected(dieNumber)) ? 'red' : '#3b7dbe'
      }"
  >{{char}}</div>
</template>

<style lang="scss">
.Die {
  flex: 1 0 20%;
  margin: 5px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  transition-duration: 0.5s;
}

.Die:hover {
  transform: scale(0.9);
}

@media only screen and (max-width: 500px) {
  .Die {
    font-size: 20pt;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Die",
  computed: {
    ...mapGetters(["IsSelected", "IsLastSelected", "getAdjacencyList", "getLastSelected"]),
  },
  data() {
    return {
      char: "",
      selected: false,
      dieNumber: 0
    };
  },
  methods: {
    Add() {
      if (
        this.getAdjacencyList[this.dieNumber].includes(
          this.getLastSelected
        ) ||
        this.getLastSelected == -1
      ) {
        this.$store.commit("AddLetter", this.char);
        this.$store.commit("AddSelectedDie", this.dieNumber);
        this.$store.commit("ChangeLastSelected", this.dieNumber);
      }
    },
    Remove() {
      if(this.IsLastSelected(this.dieNumber)){
        this.$store.commit("RemoveLetter");
      }
    },
    Random() {
      this.char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
  },
  created() {
    this.Random();
    this.dieNumber = this.$store.getters.getCreateDieNumber;
    this.$store.commit("CreateDie");
  }
};
</script>
