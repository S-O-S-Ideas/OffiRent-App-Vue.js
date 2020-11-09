<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>OffiRent</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/profile">Profile</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/workplaces">Workplaces</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>>
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

  }),
};
</script>
