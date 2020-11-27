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
            <div>
              $ {{ this.item.price }}      | ★ {{this.item.score}}      | Aforo: {{this.item.score}}
            </div>
            <p class="display-1 text--primary">
              {{this.item.title}}
           </p>
            <div class="text--primary">
              {{this.item.description}}
            </div>
          </v-card-text>

          <v-card-actions v-model="item">
            <v-btn
                @click="goBack"
                text
                color="deep-purple accent-4">
              Regresar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="!amIOWner()"
                text
                color="deep-purple accent-4">
              Reservar
            </v-btn>
            <v-btn v-if="amIOWner()"
                   text
                   color="deep-purple accent-4">
              Actualizar
            </v-btn>
            <v-btn v-if="amIOWner()"
                   text
                   color="deep-purple accent-4">
              Archivar
            </v-btn>
            <v-btn
                   @click="navigateToOfficeReservation(item.id)"
                   v-if="amIOWner()"
                   text
                   color="deep-purple accent-4">
              Ver Reservas
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
        title: '',
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
        services: [],
        accountId: 0
      }
    }
  },
  computed: {
    displayOfficeStatus() {
      return this.item.status ? 'Activated' : 'Disabled';
    }
  },
  methods: {

    amIOWner() {
      return parseInt(100) == parseInt(this.item.accountId)
      // console.log(parseInt(100) === parseInt(this.item.accountId))
    },

    navigateToOfficeReservation(id){
      console.log('queso');
      this.$router.push({name: 'office-reservations', params: { id: id}});
    },

    goBack() {
      this.$router.push({name: 'workspace'});
    },
    mounted() {
      this.retrieveOffice();
    },

    refreshList() {
      this.retrieveOffice();
    },

    retrieveOffice() {
      OfficesServices.getViewProvider(this.$route.params.officeId)
          .then((response) => {
            this.item.id = response.data.id
            this.item.title = response.data.title
            this.item.url - response.data.url,
            this.item.address = response.data.address;
            this.item.capacity = response.data.capacity;
            this.item.score = response.data.score;
            this.item.description = response.data.description;
            this.item.price = response.data.price;
            this.item.accountId = response.data.accountId;
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
