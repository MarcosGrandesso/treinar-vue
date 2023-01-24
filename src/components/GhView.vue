<template>
  <v-container>
    <GithubRepo @repo-selected="onRepoSelected" class="inputs"/>
    <!-- <GithubIssues :repo="repo" /> -->
    <ContentRepo :repo="repo"/>
  </v-container>
</template>

<script>
import GithubRepo from './GithubRepo'
// import GithubIssues from './GithubIssues'
import ContentRepo from './ContentRepo'



  export default {
    components: {
    // HelloWorld,
    GithubRepo,
    // GithubIssues,
    ContentRepo
  },
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo) {
          this.repo =repo
      }
    }
  }
</script>

<style>
.inputs {
  margin-top: 10rem;
}
</style>