<template>
    <div class="Board">
        <table>
            <tr>
                <th><Die></Die></th>
                <th><Die></Die></th> 
                <th><Die></Die></th>
                <th><Die></Die></th>
            </tr>
            <tr>
                <th><Die></Die></th>
                <th><Die></Die></th> 
                <th><Die></Die></th>
                <th><Die></Die></th>
            </tr>
            <tr>
                <th><Die></Die></th>
                <th><Die></Die></th> 
                <th><Die></Die></th>
                <th><Die></Die></th>
            </tr>
            <tr>
                <th><Die></Die></th>
                <th><Die></Die></th> 
                <th><Die></Die></th>
                <th><Die></Die></th>
            </tr>
        </table>
    </div>
</template>

<style>
    Table{
        border-spacing: 0.7vw;
        box-shadow: 7px 7px 16px grey;
    }
</style>

<script>
import { mapGetters, mapMutations } from 'vuex' 
import Die from "@/components/Die.vue";

  export default {
    name: "Board",
    data() {
      return {
        Size: 4,
      };
    },
    components: {
        Die,
    },
  }
</script>