<template>
  <div class="Die">
    {{char}}
  </div>
</template>

<style lang="scss">
.Die {
  width: 100px;
  height: 100px;
  line-height: 100px;
  color: white;
  background-color: rgb(59, 125, 190);
  font-size: 40pt;
  transition-duration: 0.5s;
}

.Die:hover {
    transform: scale(1.2);
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
        char: "A",
      };
    },
  }
</script>
