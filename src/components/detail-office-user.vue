<template>
  <v-card>
    <v-list-item>
      <v-img max-height="350px" max-width="500px" v-bind:src="item.url"></v-img>
      <v-list-item-content>
      <v-list-item-title class="headline mb-10">{{item.address}}</v-list-item-title>
      </v-list-item-content>

      <v-tabs v-model="tab" dark>
        <v-tabs-slider color="teal darken-3"></v-tabs-slider>
        <v-tab href="#tab-1">Description</v-tab>
        <v-tab href="#tab-2">Services</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>{{item.description}}</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-list-item v-for="header in headers" :key="header"></v-list-item> <!--temporal porque aqui van los services-->

          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-list-item-content>
        <v-list-item-title>Floor</v-list-item-title>
        <v-list-item-subtitle>{{item.floor}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Capacity</v-list-item-title>
        <v-list-item-subtitle>{{item.capacity}} people</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Score</v-list-item-title>
        <v-list-item-subtitle>{{item.score}} %</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>price</v-list-item-title>
        <v-list-item-subtitle>S/.{{item.price}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Status</v-list-item-title>
        <v-list-item-subtitle>{{displayOfficeStatus}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>

      <v-btn small color="green" @click="close">Return</v-btn>
      <v-spacer></v-spacer>
      <v-btn small color="green" @click="navigateToReserveOffice">Reserve</v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
import OfficesService from "@/services/offices-service";

export default {
  name: "detail-office-user",
  data() {
    return {
      tab: null,
      item: {
        id: 0,
        url:'',
        address: '',
        floor: '',
        capacity: '',
        allowResource: false,
        score: '',
        description: '',
        price: '',
        status: false,
        comment: '',
        services: []
      },

      headers: [          // innecesarios por ahora(eran para los services de office)
        {text: 'Id', value: 'id'},
        {text: 'Name', value: 'name'},
        {text: 'Image', value: 'image'},
        {text: 'OfficeId', value: 'officeId'}
      ]
    }
  },

  computed: {
    displayOfficeStatus(){
      return this.item.status ? 'Activated': 'Disabled';
    }
  },

  methods: {
    retrieveOffice(id) {
      OfficesService.getViewUser(id)
        .then( (response) =>{
          this.item = response.data();
        } )
        .catch(e => {
          console.log(e);
        })
    },
    navigateToOffices() {
      this.$router.push({name: 'tutorials'}); // necesita cambiar a componente de lista de oficinas
    },

    close() {
      this.navigateToOffices();
    },
    navigateToReserveOffice(){
      this.$router.push({name: 'tutorials'}); // necesita cambiar a componente de pestaña de reservas
    }


  },
  created() {
    this.retrieveOffice(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
