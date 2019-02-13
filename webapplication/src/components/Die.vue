<template>
  <div 
  @click="(selected) ? Remove() : Add()"
  @mouseover="(selected) ? Remove() : Add()"
  class="Die"
  :style="{
    backgroundColor: (selected) ? 'red' : '#3b7dbe',
  }"
  >
  {{char}}
  </div>
</template>

<style lang="scss">
.Die {
  flex: 1 0 20%;
  margin: 5px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 40pt;
  transition-duration: 0.5s;
}

.Die:hover {
  transform: scale(0.9);
}

@media only screen and (max-width: 500px) {
  .Die {
    width: 65px;
    height: 65px;
    line-height: 65px;
    font-size: 20pt;
  }
}
</style>

<script>
export default {
  name: "Die",
  data() {
    return {
      char: "",
      selected: false,
    };
  },
  methods: {
    Add(){
      // this.$emit('hover');
      this.$emit('add', this.char);
      this.selected = !this.selected;
    },
    Remove(){
      this.$emit('remove', this.char);
      this.selected = !this.selected;
    },
    Random(){
      this.char = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
  },
  created(){
    this.Random();
  }
};
</script>
