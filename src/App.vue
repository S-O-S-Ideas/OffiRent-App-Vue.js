<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>In-App Navigation Sample</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/tutorials">Tutorials</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/workspace">Oficinas</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
