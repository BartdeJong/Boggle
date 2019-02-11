<template>
  <div class="die">
      {{char}}
  </div>
</template>

<style lang="scss">
.die {
  width: 50px;
  height: 50px;
  border: 5px solid lightslategray;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
</style>

<script>
  export default {
    name: "Die",
    data() {
      return {
        char: "a",
      };
    },
  }
</script>
