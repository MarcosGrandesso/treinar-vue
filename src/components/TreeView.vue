<template>
  <div>
    <v-treeview
      @update:active="getItemClicado"
      v-model="tree"
      :open="initiallyOpen"
      :items="items"
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>

    <!--  modalzinho  -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Sintax Highligth
          </v-card-title>

          <v-card-text>
            <codehighligth :code="fileContentC"></codehighligth>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text v-on="!on" @click="fechaModal">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { api } from "../api/api.js";
import codehighligth from "./codehighligth.vue";

export default {
  components: {
    codehighligth,
  },
  methods: {
    async trataContent(content) {
      console.log(content[8]);
      for (let i of content) {
        if (!i.path.includes("/")) {
          if (i.type === "file") {
            i["file"] = i.name.split(".").pop();
            this.items.push(i);
          } else {
            let children = await api.getRepo(
              this.reponame.owner.login,
              this.reponame.name,
              i.path
            );
            this.trataContent(children);
            i["children"] = children;
            this.items.push(i);
          }
        }
      }
    },
    async getItemClicado(array) {
      let item_clicado = this.content.filter(
        (arquivo) => arquivo.name === array[0]
      );
      this.fileContent = await api.getFileContent(item_clicado[0].download_url);
      this.dialog = true;
    },
    fechaModal() {
      this.fileContent = "";
      this.dialog = false;
    },
  },
  props: ["content", "login", "reponame"],
  data: () => ({
    fileContent: "",
    dialog: false,
    initiallyOpen: ["public"],
    files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        svg : 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
        yml: 'mdi-file',
        py : "mdi-language-python",
        ico: 'mdi-file',
        txt: 'mdi-clipboard-text',
        css: 'mdi-language-css3',
        gitignore: 'mdi-block-helper',
        vscode: 'mdi-laptop'
      },
    tree: [],
    items: [],
  }),
  watch: {
    content() {
      this.trataContent(this.content);
    },
  },
  computed: {
    fileContentC() {
      return this.fileContent
    }
  }
};
</script>
