<template>
  <div class="offices">
    <ListOffices></ListOffices>
  </div>
</template>

<script>
import ListOffices from "../components/offices/list-offices";
export default {
  name: "Offices",
  data(){
    return{
    }
  },
  components: {
    ListOffices
  }
}
</script>

<style scoped>

</style>
