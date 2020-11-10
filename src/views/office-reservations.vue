<template>
  <v-app>
    <v-content>
      <v-tabs v-model="tab" centered>
        <v-tab>Active</v-tab>
        <v-tab>Pending</v-tab>
        <v-tab>Finished</v-tab>
        <v-tab>Canceled</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <officeReservationsTable status="Active"></officeReservationsTable>
        </v-tab-item>
        <v-tab-item>
          <officeReservationsTable status="Pending"></officeReservationsTable>
        </v-tab-item>
        <v-tab-item>
          <officeReservationsTable status="Finished"></officeReservationsTable>
        </v-tab-item>
        <v-tab-item>
          <officeReservationsTable status="Canceled"></officeReservationsTable>
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>

<script>
import officeReservationsTable from "@/components/office-reservations-table";
export default {
  name: "user-reservations",
  components: {
    officeReservationsTable,
  },
  data() {
    return {
      tab: null
    }
  }
};
</script>

<style scoped>

</style>