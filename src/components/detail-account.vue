<template>
  <v-card>
    <v-card-title class="profile">Perfil</v-card-title>
      <v-spacer></v-spacer>
    <v-row no-gutters>
      <v-col cols="15" sm="10">
        <div>
          <a>
            <v-img class="image"
                   src="https://img.freepik.com/foto-gratis/hombre-negocios-trabajando-escritorio-oficina_79405-3705.jpg?size=626&ext=jpg"></v-img>
          </a>
        </div>
      </v-col>
      <v-col cols="10" sm="8" class="right-banner">
        <v-card-text class="right-text">
          <p class="text-lg-left">Nombre: Juan</p>
          <br/>
          <p class="text-lg-left">Apellidos: Dominguez Peralta</p>
          <br/>
          <p class="text-lg-left">E-mail: juan@gmail.com</p>
          <br/>
          <p class="text-lg-left">Teléfono: 987654321</p>
        </v-card-text>
      </v-col>
        <v-btn class="button" large color="primary" @click="navigateToEditProfile">Editar Perfil</v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{on, attrs}">
            <v-btn class="button" large color="error" v-bind="attrs" v-on="on">Desactivar Cuenta</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{on, attrs}">
                  <v-btn small color="blue darken-1"  v-bind="attrs" v-on="on">Ok</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle1 }}</span>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: "profile",
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
      return 'Are you sure to deactivate your account?'
    },
    formTitle1(){
      return 'Your account has been deactivated'
    }
  },
  methods:{
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
    navigateToEditProfile(){
      this.$router.push({name: 'edit-account'});
    },

}

}
</script>

<style scoped>
.profile{
  margin-top: 2vw;
  margin-left: 5vw;
  font-size: 2vw;
  font-family: 'Khula', sans-serif;
}
.image{
  margin-top: 2vw;
  margin-left: 5vw;
  width: 40%;
  height: 40%;
  border-radius: 10px;
}
.button{
  margin-top: 2vw;
  margin-left: 7.5vw;
  margin-bottom: 5vw;
  border-radius: 20px;
  height: 30%;
  width: 10%;
  font-size: 0.7vw;
}
.right-banner{
  margin-left: 45vw;
  margin-top: -20vw;
  font-size: 11vw;
}
.right-text{
  font-size: 1.5vw;
  margin-top: 2vw;
}
</style>
