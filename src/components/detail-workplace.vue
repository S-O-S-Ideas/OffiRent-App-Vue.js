<template>
  <v-card>
    <v-card-title>Workplace</v-card-title>
    <v-spacer></v-spacer>
      <v-btn small color="primary"  @click="navigateToEditWorkplace">Edit Workplace</v-btn>
      <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{on, attrs}">
        <v-btn small color="error"  dark class="mb" v-bind="attrs" v-on="on">Archive Workplace</v-btn>
      </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{on, attrs}">
                <v-btn small color="blue darken-1"  dark class="mb" v-bind="attrs" v-on="on">Ok</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle1 }}</span>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="save">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>

      </v-dialog>

  </v-card>
</template>
<script>


export default {
  name: "workplaces",
  data(){
    return{
      dialog: false,
      defaultItem: {
      },
      displayTutorials: [],
      tutorials: [],
    }
  },
  computed: {
    formTitle() {
      return 'Are you sure to archive this workplace?'
    },
    formTitle1(){
      return 'Your workplace has been archived'
    }
  },
  methods:{
    navigateToEditWorkplace(){
      this.$router.push({name: 'edit-workplaces'});
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    editItem(item) {
      this.editedIndex = this.displayTutorials.indexOf(item);
      console.log(item);
      this.editedItem = this.tutorials[this.editedIndex];
      this.dialog = true;
    },
    navigateToWorkplace(){
      this.$router.push({name: 'detail-workplace'});
    },

  }

}
</script>

<style scoped>

</style>