<template>
  <div >
    <v-row class="text-center fxc">
      <v-col >
        <v-autocomplete
        v-model="user"
        :items="userlist"
        label="Selecione Owner do repositorio"
        :loading="userloading"
        :search-input.sync="usersearch"
        item-text="login"
        />
      </v-col>
      <v-col >
        <v-select
          v-model="repo"
          :items="repolist"
          item-text="name"
          :loading="repoloading"
          label="Selecione o repositorio"
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
 import { debouncerdecorator } from '../helpers/debouncer'
import { api } from '../api/api.js'
// let debounceUser = null

  export default {
    data: () => ({
      repo: null,
      user:null,
      userlist: [],
      repolist: [],
      repoloading :false,
      userloading: false,
      usersearch: null
    }),
    methods: {


      procuraUsuariosGithub: debouncerdecorator(async function () { // atenção: não use ()=>{} aqui. vai quebrar o decorator
        this.userloading = true
        const data = await api.search_users(this.usersearch)
        this.userlist = data.items
        this.userloading = false
      }, 500),

      async listaRepositorios() {
          this.repoloading =true 
          const data = await api.lista_repos(this.user)
          this.repolist = data
          this.repoloading = false
        },
      async getUser() {
          console.log('perguntei ' + this.usersearch )
          this.userloading = true
          const data = await api.search_users(this.usersearch)

          this.userlist = data.items
          this.userloading = false
      }
    },
    watch: {
      usersearch() {
        this.procuraUsuariosGithub()
      },
      user() {
        if (this.user) {
          this.listaRepositorios(this.user)
        }
      },
      repo () {
          this.$emit("repo-selected", this.repo)
      }
    }
  }
</script>

<style scoped>
.fxc {
  display: flex;
  flex-direction: column;
}
</style>