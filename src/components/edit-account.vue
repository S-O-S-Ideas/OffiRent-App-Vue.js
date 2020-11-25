<template>
  <v-container>
    <v-card-title class="justify-start">Editar Perfil</v-card-title>
    <v-card class="profile_card">
      <v-form v-model="isValid">
      <p>Información Personal</p>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
                label="Nombre"
                v-model="firstName"
                :rules="nameRules"
                required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
                label="Apellidos"
                v-model="lastName"
                :rules="lastNameRules"
                required></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
                ref="email"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
                label="Contraseña"
                v-model="password"
                :rules="passwordRules"
                error-count="6"
                required>
            </v-text-field>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="3">
            <v-text-field
                label="Teléfono"
                v-model="phoneNumber"
                :rules="phoneNumberRules"
                required>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
                label="Identificación"
                v-model="identification"
                :rules="identificationRules"
                required>
            </v-text-field>
          </v-col>
        </v-row>
      </div>
      </v-form>
    </v-card>
    <v-card-actions>
      <v-btn @click="backClick">Atras</v-btn>
      <v-col class="text-right">
        <v-btn :disabled="!isValid" @click="save" bottom center class="white--text" color="#4b7bff">Guardar Cambios
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-container>
</template>

<script>

import AccountService from "@/services/accounts-service";
export default {
  name: "edit-account",
  props:{
    articles: Array
  },
  data(){
    return {
      item: {
        email: null,
        password: null,
        identification: null,
        phoneNumber:null,
        firstName: null,
        lastName: null
      },
    editProfile:true,
    isValid: true,
    nameRules:[
        v=> !!v || 'Nombre es requerido',
        v=> !/(?=.*\d)/.test(v)||'Nombre no puede contener un número',
        v => !/([!@#$%])/.test(v) || 'Nombre no puede contener caracteres especiales'
    ],
    lastNameRules:[
        v=> !!v || 'Apellidos es requerido',
        v=> !/(?=.*\d)/.test(v)||'No puede contener un número',
        v => !/([!@#$%])/.test(v) || 'No puede contener caracteres especiales'
    ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail inválido.',
      ],
      passwordRules: [
        v => !!v || 'Contraseña es requerido',
        v => (v && v.length >= 6) || 'Debe contener como mínimo 6 caracteres',
        v => /(?=.*[A-Z])/.test(v) || 'Debe contener una mayúscula',
        v => /(?=.*[a-z])/.test(v) || 'Debe contener una minúscula',
        v => /(?=.*\d)/.test(v) || 'Debe contener un número',
        v => /([!@#$%])/.test(v) || 'Debe contener un caracter especial [!@#$%]'
      ],
      phoneNumberRules: [
        v => !!v || 'Teléfono es requerido',
        v => !/(?=.*[A-Z])/.test(v) || 'No puede contener letras',
        v => !/(?=.*[a-z])/.test(v) || 'No puede contener letras',
        v => !/([!@#$%])/.test(v) || 'No puede contener caracteres especiales [!@#$%]',
        v => (v && v.length === 9) || 'Debe tener 9 números'
      ],
      identificationRules: [
        v => !!v || 'Identificación es requerido',
        v => !/([!@#$%])/.test(v) || 'No debe contener caracteres especiales [!@#$%]'
      ]

    }
  },
  methods:{
    retrieveAccount(){
      AccountService.get()
      .then((response) => {
        this.item = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    },
    save() {
      AccountService.update(this.item)
      .then(() => {
        this.navigateToAccount();
      })
      .catch(e => {
        console.log(e);
      })
    },

    backClick(){
      this.navigateToAccount();
    },
    navigateToAccount(){
      this.$router.push({name: 'detail-account'})
    }
  },
  created() {
    this.retrieveAccount(this.$route.params.id);
  }
}
</script>

<style scoped>
</style>
