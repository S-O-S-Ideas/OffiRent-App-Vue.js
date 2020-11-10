<template>
  <v-app>
    <div>
      <Head></Head>
      <v-content>
        <router-view/>
      </v-content>
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>

import Head from "./components/head";
//const Head=require("./components/head");
import Footer from "./components/footer";
export default {
  name: 'App',

  components: {
    Head,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
