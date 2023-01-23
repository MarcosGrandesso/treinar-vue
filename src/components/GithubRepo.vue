<template>
  <div>
    <v-row class="text-center">
      <v-col cols="6">
        <v-autocomplete
        v-model="user"
        :items="userlist"
        :loading="userloading"
        :search-input.sync="usersearch"
        item-text="login"
        />
      </v-col>
      <v-col cols="6">
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
    
        <div>
          <v-btn @click="vai"> 
            Vai
          </v-btn>
        </div>
  </div>
</template>

<script>

import { api } from '../api/api.js'
let debounceUser = null

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
      procuraUsersDebounced () {
        if (debounceUser) {
          clearTimeout(debounceUser)
        }
        this.debounceUser = setTimeout(() => {
          this.getUser() 
          debounceUser = null
        }, 760)

      },
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
        this.procuraUsersDebounced()
      },
      user() {
          this.listaRepositorios(this.user)
      },
      repo () {
          console.log(this.repo)
      }
    }
  }
</script>