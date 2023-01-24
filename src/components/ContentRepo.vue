<template>
  <div>
    <div class="fx path">
      <v-chip
        class="ma-2"
        color="deep-purple accent-1"
        label
        text-color="white"
      >PATH &nbsp; &nbsp;
        <v-icon left>
          mdi-label
        </v-icon>
         {{ repo.name}}/{{ rootPath }}
      </v-chip>
      <div v-if="rootPath">
            <v-btn @click="volta"> 
              Voltar
            </v-btn>
    </div>
        </div>
        <div v-for="item in repoContent" :key="item.name">
          <div class="fx" @click="atualizaPath(item)" v-if="item.type === 'dir'">
            <i class="mdi mdi-folder-outline"></i> 
            &nbsp;
            <p>{{ item.name}}</p> 
          </div>
          <div class="fx" v-else>
            <i class="mdi mdi-file"></i>
            &nbsp;
            <p>{{ item.name}}</p> 
          </div>
        </div>
  </div>
</template>

<script>

import { api } from '../api/api.js'

export default {
  data: () => ({
      repoContent: null,
      rootPath:''

    }),
  props: ['repo'],
  methods: {
      async getContent(repo, possivel_path='') {
        // console.log(repo.owner.login)
        // console.log(repo.name)
        // console.log(repo)

        this.repoContent = await api.getRepo(repo.owner.login, repo.name, possivel_path)
      },
      atualizaPath(item) {
        console.log(item)
        this.rootPath = ''
        this.rootPath = this.rootPath + item.path
        console.log(this.rootPath)
      },
      volta() {
        this.rootPath = ''
        this.getContent(this.repo)
      }
  },
  watch: {
      repo() {
          this.getContent(this.repo)
      },
      rootPath() {
        this.getContent(this.repo, this.rootPath)
      }
      
    },

}
</script>

<style>
.fx {
  display: flex;
}

.path { 
  gap: 2rem;
}
</style>