<template>
  <v-card>
    <v-list-item>
      <v-img max-height="350px" max-width="500px" v-bind:src="item.url"></v-img> <!--imagen a corregir-->


      <v-list-item-content>
        <v-list-item-title>Id</v-list-item-title>
        <v-list-item-subtitle>{{item.id}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Initial Date</v-list-item-title>
        <v-list-item-subtitle>{{item.initialDate}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Finish Date</v-list-item-title>
        <v-list-item-subtitle>{{item.finishDate}} people</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Status</v-list-item-title>
        <v-list-item-subtitle>{{item.status}} %</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>AccountId(User)</v-list-item-title>
        <v-list-item-subtitle>{{item.accountId}}</v-list-item-subtitle> <!--account del user-->
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Status</v-list-item-title>
        <v-list-item-subtitle class="text-no-wrap secondary" style="color: #008b8b">{{displayReservationStatus}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-spacer></v-spacer>
      <template v-if="displayReservationStatus==='Pending'">
        <v-btn small color="primary">Accept</v-btn>  <!--Falta agregar implementacion-->
        <v-btn small color="error">Deny</v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import ReservationsServices from "@/services/reservations-service";

export default {
  name: "detail-reservation-provider",
  data() {
    return {
      item: {
        id: 0,
        initialDate: '',
        finishDate: '',
        status: 0,
        accountId: '',
        officeId: ''
      }
    }
  },
  computed: {
    displayReservationStatus() {
      if (this.item.status==0){
        return 'Pending';
      }
      else if(this.item.status==-1){
        return 'Canceled';
      }
      else{
        return 'Accepted';
      }
    }
  },
  methods: {
    retrieveReservation(providerId, officeId, reservationId) {
      ReservationsServices.getViewProvider(providerId, officeId, reservationId)
        .then( (response) => {
          this.item = response.data;
        })
        .catch(e => {
          console.log(e);
        })
    }
  },
  created() {
    this.retrieveReservation(this.$route.params.providerId,
                            this.$route.params.officeId,
                            this.$route.params.reservationId);
  }

}
</script>

<style scoped>

</style>
