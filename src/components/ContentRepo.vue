<template>
  <div class="justify-center d-flex">
    <div class="fx path flex-column">
      <v-chip
        class="ma-2 margin-t"
        color="deep-purple accent-1"
        label
        text-color="white"
      >PATH &nbsp; &nbsp;
        <v-icon left>
          mdi-label
        </v-icon>
         {{ repo.name}}/{{ rootPath }}
      </v-chip>

      <div v-if="rootPath" class="btn-ajust">
            <v-btn @click="volta"> 
              Voltar
      </v-btn>
    </div>
    <div class="directions-r">
      <TreeView :content="repoContent" :reponame="this.$props.repo" />
      <!-- <div v-for="item in repoContent" :key="item.name" class="directions-r">
        <div class="fx ml-5" @click="atualizaPath(item)" v-if="item.type === 'dir'">
          <i class="mdi mdi-folder-outline"></i> 
          &nbsp;
          <p>{{ item.name}}</p> 
        </div>
        <div class="fx ml-5" v-else @click="contentItem(item)">
          <i class="mdi mdi-file"></i>
          &nbsp;
          <p>{{ item.name}}</p> 
        </div>
      </div> -->
    </div>
        </div>
  </div>
</template>

<script>

import { api } from '../api/api.js'
import TreeView from './TreeView.vue'

export default {
  components:{
      TreeView
  },
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
      },
      contentItem(item) {
        console.log(item)
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
.directions-r {
  flex-direction: column;
}
.btn-ajust {
  max-width: 80px;
  display: flex;
  margin: auto;
}
</style>