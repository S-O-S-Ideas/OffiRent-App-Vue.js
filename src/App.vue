<template>
  <v-app>

    <div>

      <v-content>
        <router-view/>
      </v-content>
      <Footer></Footer>
    </div>

    <v-app-bar app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>OffiRent</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed>
          <router-link to="/"><a>Home</a></router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/workplaces">Search</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/reservations">Reservations</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/myworkplaces/">Workplaces</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/profile">Profile</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>>
<!--    <v-main>-->
<!--      <v-container>-->
<!--        <router-view></router-view>-->
<!--&lt;!&ndash;        <Head></Head>&ndash;&gt;-->
<!--      </v-container>-->
<!--    </v-main>-->
    <v-footer absolute app>
    </v-footer>

  </v-app>
</template>





<script>
// import Head from "./components/head";
//const Head=require("./components/head");
import Footer from "./components/footer";

export default {
  name: 'App',

  components: {
    // Head,
    Footer
  },

  data: () => ({

  }),
};
</script>

<style>


</style>