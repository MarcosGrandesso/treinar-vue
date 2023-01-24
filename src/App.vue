<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple accent-1"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
          transition="scale-transition"
          width="40"
        />

        <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      > -->
        <h1 class="ml-5">GitHub Folder Explorer</h1>
      <!-- </v-btn> -->
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        text
      >
        <span class="mr-2">Pesquisar outro Repositorio</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <GithubVue/>
    </v-main>
  </v-app>
</template>

<script>
import GithubVue from './components/GhView.vue';

export default {
  name: 'App',

  components: {
    GithubVue,
  },

  data: () => ({
    //
  }),
};
</script>
