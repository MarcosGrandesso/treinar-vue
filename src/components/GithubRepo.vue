<template>
  <div>
    <v-autocomplete
        v-model="user"
        :items="userlist"
        :loading="userloading"
        :search-input.sync="usersearch"
        item-text="login"
        />
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
      user:null,
      userlist: [],
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
      getUser() {
          console.log('perguntei ' + this.usersearch )
          this.userloading = true
          api.search_users(this.usersearch).then(data => {

          this.userlist = data.items
          this.userloading = false
          }
        )
      }
    },
    watch: {
      usersearch() {
        this.procuraUsersDebounced()

      }
    }
  }
</script>