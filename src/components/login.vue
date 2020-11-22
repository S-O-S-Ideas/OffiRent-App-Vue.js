<template class="content">
  <v-app class="content">
    <v-row no-gutters>
      <v-col cols="12" sm="5" class="left_banner">
        <v-card-text class="header">
          <v-row>
            <v-col cols="25" sm="10">
              <div>
                <a href="/login">
                  <img class="logo" src="@/assets/offirent.png" alt="">
                </a>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="login">
          <div class="form">
            <v-text-field class="text-field"
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
            ></v-text-field>
          </div>
          <div class="form">
            <v-text-field class="text-field"
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="passwordRules"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Contraseña"
                          hint="Como mínimo 8 caracteres"
                          counter
                          @click:append="show1 = !show1"
            ></v-text-field>
          </div>
          <v-card-text class="btn">
            <v-btn @click="validateUser" class="login_btn" color="primary" :disabled="!isValid" >Log In</v-btn>
            <v-btn to="/register" class="login_btn" color="primary">Registrate</v-btn>
          </v-card-text>
        </v-card-text>

        <v-card-text class="about">
          <v-row>
            <v-col cols="12" sm="8">
              <p class="about_title">¿Que es OffiRent?</p>
              <div>
                <p class="about_text">Aquí en OffiRent, te ayudamos a encontrar una oficina o un espacio de trabajo de acuerdo a tus preferencias. Asimismo te facilitamos la búsqueda de clientes en caso quieras publicar una oficina desde nuestra plataforma.</p>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn href="https://s-o-s-ideas.github.io/LandingPage-Offi-Rent-Web/" target="_blank" class="about_btn">Conoce más sobre nosotros</v-btn>
            </v-col>
          </v-row>
        </v-card-text>

      </v-col>
      <v-col cols="12" sm="7" class="right_banner">
        <v-card-text class="right_text">
          <p class="text-lg-left">Bienvenido a</p>
          <br/><br/><br/><br/><br/>
          <h1 class="text-lg-center-left">OffiRent</h1>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <p class="text-lg-left">Ingresa con tu cuenta</p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-app>
</template>


<script>

export default {
  name: "Login",
  data: () => ({
    userId: 0,
    firstName: null,
    email: null,
    isValid: true,
    show1: false,
    auth: false,
    role: false,
    password: '',
    ref: "/",
    users: [],
    userProfile: [],

    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have at least 6 characters',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail inválido.',
    ]
  }),
}
</script>

<style scoped>
.right_text{
  margin-top: 6vw;
  margin-left: 7vw;
  color: white;
  font-size: 3.5vw;
}
.content{
  padding-left: 0;
  margin-left: 0;
  border-left: 0;
}
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 3vw;
}
.login{
  padding-top: 1vw;
}
.left_banner{
  font-size: 3vw;
}
.right_banner{
  font-size: 11vw;
  color: white;
  background-color: #282a3f;
}
.login_btn{
  margin-top: 1vw;
  background-color: #2c305b !important;
  width: 80%;
  border-radius: 20px;
  margin-left: 3vw;
  height: 100%;
}
.logo{
  margin-top: 2vw;
  margin-left: 12vw;
  width: 40%;
  height: 40%;
}
.about{
  /*margin-top: 4em;*/
  margin-bottom: 0;
}
.about_title{
  font-size: 1.2vw;
  font-weight: bold;
}
.about_text{
  margin-top: 1vw;
  font-size: 1vw;
  text-align: justify;
  font-weight: normal;
}
.about_btn{
  margin-top: 3.5vw;
  border-radius: 20px;
  margin-left: 1vw;
  width: 80%;
  height: 50%;
  font-size: 0.5vw;
}

</style>
