<template>
  <v-app >
    <v-main>
      <v-layout justify-center>
        <v-card max-width="1000" >
          <v-img
              class="white--text align-end"
              height="500px"
              src="https://www.businessopportunitystartup.com/wp-content/uploads/2020/03/dexus-office-space.jpg">
            <v-card-title>{{this.item.address}}</v-card-title>
          </v-img>
          <v-card-text>
            <div>$2000</div>
            <p class="display-1 text--primary">
              be•nev•o•lent
           </p>
            <p>★ 45</p>
            <div class="text--primary">
              {{this.item.description}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import OfficesServices from "@/services/offices-service";

export default {
  name: "detail-office-provider",
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
        score: 0,
        description: '',
        price: 0,
        status: false,
        comment: '',
        services: []
      }
    }
  },
  computed: {
    displayOfficeStatus() {
      return this.item.status ? 'Activated' : 'Disabled';
    }
  },
  methods: {

    mounted() {
      this.retrieveOffice();
    },

    refreshList() {
      this.retrieveOffice();
    },

    retrieveOffice() {
      OfficesServices.getViewProvider(this.$route.params.officeId)
          .then((response) => {
            this.item.address = response.data.address;
            this.item.description = response.data.description
            console.log(response.data)
          })
          .catch(e => {
            console.log(e);
          })
    },
    navigateToOffices() {
      this.$router.push({name: 'tutorials'}); // necesita cambiar a componente de lista de oficinas del proveedor
    },

    close() {
      this.navigateToOffices();
    },
    navigateToEditOffices() {
      this.$router.push({name:'tutorials'}) // necesita cambiar a componente de editar oficina
    },
    navigateToListOfReservationsOfOffice() {
      this.$router.push({name: 'tutorials'}); // necesita cambiar a componente de lista de reservaciones que tiene la oficina
    }
  },
  created() {
    this.retrieveOffice(this.$route.params.id);
  }
}
</script>

<style scoped>
action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
