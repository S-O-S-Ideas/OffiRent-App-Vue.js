<template>
  <v-app>
    <div>
      <v-row>
        <v-col sm="3" offset-lg="0" align-self="start">
          <v-card>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
          </v-card>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Busqueda por Distrito</v-expansion-panel-header>
              <v-expansion-panel-content >
                <v-list>
                  <v-list-item>
                    <v-checkbox
                        v-model="d1"
                        :label="district[0].name"
                        @click.native="filteredOffices(80)"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Busqueda por precio</v-expansion-panel-header>
              <v-expansion-panel-content >
                <v-list>
                  <v-list-item>
                    <v-checkbox
                        v-model="status1"
                        :label="`0  -  300`"
                    ></v-checkbox>
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                        v-model="status2"
                        :label="`250 - 500`"
                    ></v-checkbox>
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                        v-model="status3"
                        :label="`500 - 750`"
                    ></v-checkbox>
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                        v-model="status4"
                        :label="`750 - 1000`"
                    ></v-checkbox>
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                        v-model="status5"
                        :label="`> 1000`"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
                <legend>price</legend>
                {{start}}
                <input type="range" v-model="start" :min="min" :max="max">
                {{end}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col sm="9"  offset-lg="0">
          <template>
            <v-spacer></v-spacer>
            <v-card max-width="200px" max-height="45px" align="end">
              <v-select
                  v-model="filtro"
                  flat
                  solo-inverted
                  hide-details
                  :items="filtros"
              >
              </v-select>
            </v-card>
          </template>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 sm4  class="mb-3" v-for="office in  filteredOffices" :key="office.id">
                <v-hover v-slot="{ hover }"
                         open-delay="100">
                  <v-card max-width="400px" class="v-card" :elevation="hover ? 18 : 2">
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
                      <div v-show="show">
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
                </v-hover>
              </v-flex>
            </v-layout>
          </v-container>
          <v-pagination class="pagination mb-2" v-model="page" :length="pages"></v-pagination>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import OfficeService from '@/services/offices-service';
export default {
  name: "list-offices",
  data () {
    return {
      search: "",
      page: 1,
      status1: false,
      status2: false,
      status3: false,
      status4: false,
      status5: false,
      d1: false,
      min: 0,
      max:1000,
      start: 0,
      end: 1000,
      pageSize: 6,
      offices: [],
      district: [],
      listCount: 0,
      historyList: [],
      titleFilter: [],
      priceFilter: [],
      addressFilter: [],
      officeDistrict: [],
      filtro: [],
      filtros: ["precio","mejor valorados"],
    }
  },
  methods: {
  },
  computed: {
    pages() {
      let _this = this;
      if (_this.pageSize == null || _this.listCount == null) return 0;
      return Math.ceil(_this.listCount / _this.pageSize);
    },
    filteredOffices: function () {
      if (this.status1 && this.status2 ) {
        return this.offices.filter((office) => {
          return office.price >= 0 && office.price <= 250;
        });
      }else if(this.status2){
        return this.offices.filter((office) => {
          return office.price >= 250 && office.price <= 500;
        });
      }else if(this.status3){
        return this.offices.filter((office) => {
          return office.price >= 500 && office.price <= 750;
        });
      }else if(this.status4){
        return this.offices.filter((office) => {
          return office.price >= 750 && office.price <= 1000;
        });
      }else if(this.status5){
        return this.offices.filter((office) => {
          return office.price >=1000;
        });
      }else if(this.d1){
        return this.officeDistrict;
      }
      else if(this.search != ""){
        return this.offices.filter((office) => {
          let p = office.price.toString();
          let t = office.title.toLowerCase();
          return t.match(this.search.toLowerCase()) || p.match(this.search);
        });
      }else if(this.start > 0){
        return this.offices.filter((office) => {
          return office.price >= this.start && office.price <= this.end;
        });
      }
      else {
        return this.offices
      }
    },
    filterList(){
      return this.offices.filter((office) => {
        return office.price >= this.start && office.price <= this.end;
      });
    }
  },
  mounted() {
    OfficeService.getAllOffices().then(response => {this.offices = response.data; this.listCount = response.data.length;});
    OfficeService.getAllDistrict().then(district => {this.district = district.data;});
  },

}
</script>

<style scoped>

</style>
