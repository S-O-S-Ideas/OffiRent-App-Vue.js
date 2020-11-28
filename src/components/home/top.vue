<template>
  <div>
    <v-row>
      <v-col sm="10" offset-md="2" md="8" offset-sm="1">
        <h2></h2>
      </v-col>
    </v-row>
    <v-container grid-list-md>
      <v-layout row>
        <v-flex xs12 class="mb-3" v-for="office in offices.slice(2,5)" :key="office.id">
          <v-card max-width="400px">
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
  </div>
</template>

<script>
import OfficeService from "@/services/offices-service";

export default {
  name: "top",
  data () {
    return {
      offices: [],
    }
  },
  mounted() {
    OfficeService.getAllOffices().then(response => {this.offices = response.data.sort((a,b) => b.score - a.score);});
  }
}
</script>

<style scoped>

</style>
