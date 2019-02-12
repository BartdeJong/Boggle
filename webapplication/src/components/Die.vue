<template>
  <div class="Die">
      {{char}}
  </div>
</template>

<style lang="scss">
.Die {
  width: 100%;
  padding-top: 100%;
  vertical-align: middle;
  color: white;
  background-color: lightslategray;
  text-align: center;
  border: 5px solid white;
}
</style>

<script>
  export default {
    name: "Die",
    data() {
      return {
        char: "A",
      };
    },
  }
</script>
