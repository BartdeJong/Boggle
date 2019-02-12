<template>
    <div class="Board">
        <table style="width:30%">
            <tr>
                <th><Die></Die></th>
                <th><Die></Die></th> 
                <th><Die></Die></th>
                <th><Die></Die></th>
            </tr>
            <tr>
                <td><Die></Die></td>
                <td><Die></Die></td> 
                <td><Die></Die></td>
                <th><Die></Die></th>
            </tr>
            <tr>
                <td><Die></Die></td>
                <td><Die></Die></td> 
                <td><Die></Die></td>
                <th><Die></Die></th>
            </tr>
            <tr>
                <td><Die></Die></td>
                <td><Die></Die></td> 
                <td><Die></Die></td>
                <th><Die></Die></th>
            </tr>
        </table>
    </div>
</template>

<style>
    Table{
        width: 30%;
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