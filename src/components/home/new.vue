<template>
  <v-app>
    <div>
      <v-row>
        <v-col sm="10" offset-md="2" md="8" offset-sm="1">
          <h2> Nuevas Oficinas</h2>
        </v-col>
      </v-row>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm4 class="mb-3" v-for="office in offices.slice(offices.length - 3,offices.length)" :key="office.id">
            <v-card max-width="600px">
              <v-img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_898700298_2000131820009280352_424477.jpg"></v-img>
              <v-card-title>{{office.title}}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="office.score" color="amber" dense readonly size="14"></v-rating>
                  <div class="grey--text ml-4">
                    {{office.score}}
                  </div>
                  <v-spacer/>
                  <div class="green--text">
                    {{"$ "+office.price}}
                  </div>
                </v-row>
              </v-card-text>
              <v-expand-transition>
                <div v-show="office.status">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{office.description}}
                  </v-card-text>
                </div>
              </v-expand-transition>
              <v-card-actions>
                <v-btn
                    color="blue"
                    text
                    @click="detalles"
                >
                  Detalles
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="office.status = !office.status"
                >
                  <v-icon>{{ office.status ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-row>
        <v-col sm="8" offset-lg="0" align-self="center">
          <TopValuation></TopValuation>
        </v-col>
        <v-col sm="4" offset-lg="0" align-self="start">
          <Top></Top>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import TopValuation from "@/components/home/top-valuation";
import Top from "@/components/home/top";
import OfficeService from '@/services/offices-service';
export default {
  name: "new",
  components: {
    TopValuation,
    Top
  },
  data () {
    return {
      show: false,
      offices: [],
    }
  },
  mounted() {
    OfficeService.getAllOffices().then(response => {this.offices = response.data;});
  }
}
</script>

<style scoped>

</style>
le>
