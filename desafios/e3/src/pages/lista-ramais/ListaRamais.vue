<template>
  <div class="hello">

        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Setor</th>
      <th scope="col">Tel. 1</th>
      <th scope="col">Tel. 2</th>
      <th scope="col">Email</th>
      <th scope="col">Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(movie,key) in fireData" :key=key>
       <th>
      {{movie.nome}}
      <input v-if='editFormMode.includes(key)' type="text" v-model='editingNome[key]' @keyup.enter='editNome(key)' class="form-control">
      </th>
       <th>
      {{movie.setor}}
      <input v-if='editFormMode.includes(key)' type="text" v-model='editingSetor[key]' @keyup.enter='editSetor(key)' class="form-control">
      </th>
      <th>
      {{movie.telefoneum}}
      <input v-if='editFormMode.includes(key)' type="number" v-model='editingTelefoneum[key]' @keyup.enter='editTelefoneum(key)' class="form-control">
      </th>
      <th>
      {{movie.telefonedois}}
      <input v-if='editFormMode.includes(key)' type="number" v-model='editingTelefonedois[key]' @keyup.enter='editTelefonedois(key)' class="form-control">
      </th>
      <th>
      {{movie.email}}
      <input v-if='editFormMode.includes(key)' type="email" v-model='editingEmail[key]' @keyup.enter='editEmail(key)' class="form-control">
      <th>
      <button class="btn btn-xs btn-primary" @click='editFormMode.push(key);'>Editar</button>
      <button class="btn btn-xs btn-danger" @click='deleteMovie(key);'>Deletar</button>

      </th>
    </tr>
    </tbody>
</table>
     <div class="row">
    <div class="card-header">Adcione</div>
      <div class="card-body">
        <form id="form"
              class="form-inline"
              @submit.prevent="addMovie">
          <div class="form-group mb-2">
            <label for="nome" class="sr-only">Nome</label>
            <input id="nome"
                  type="text"
                  class="form-control"
                  placeholder="Nome"
                  v-model="nome" />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="setor" class="sr-only">Setor</label>
            <input id="setor"
                  type="text"
                  class="form-control"
                  placeholder="Setor"
                  v-model="setor" />
          </div>
          <div class="form-group mb-2">
            <label for="telefoneum" class="sr-only">Telefone 1</label>
            <input id="telefoneum"
                  type="number"
                  class="form-control"
                  placeholder="Telefone 1"
                  v-model="telefoneum" />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="telefonedois" class="sr-only">Telefone 2</label>
            <input id="telefonedois"
                  type="number"
                  class="form-control"
                  placeholder="Telefone 2"
                  v-model="telefonedois" />
          </div>
                    <div class="form-group mb-2">
            <label for="email" class="sr-only">Email</label>
            <input id="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="email" />
          </div>
          <button type="submit" class="btn btn-primary mx-sm-3 mb-2">Adcionar</button>
          <b-button type="reset" class="btn btn-danger mx-sm-3 mb-2">Cancelar</b-button>
       </form>
      </div>
    </div>
        </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      movies: [],
      movie: null,
      nomes: [],
      nome: null,
      setores: [],
      setor: null,
      telefoneums: [],
      telefoneum: null,
      telefonedoiss: [],
      telefonedois: null,
      emails: [],
      email: null,
      fireData: null,
      editingMovie: [],
      editingAutor: [],
      editingLink: [],
      editingNome: [],
      editingSetor: [],
      editingTelefoneum: [],
      editingTelefonedois: [],
      editingEmail: [],
      editFormMode: []
    }
  },
  methods: {
    addMovie () {
      this.nomes.push(this.nome)
      this.setores.push(this.setor)
      this.telefoneums.push(this.telefoneum)
      this.telefonedoiss.push(this.telefonedois)
      this.emails.push(this.email)
      this.$firebase.database().ref('ramais').push({
        nome: this.nome,
        setor: this.setor,
        telefoneum: this.telefoneum,
        telefonedois: this.telefonedois,
        email: this.email

      })
      this.movie = null
    },
    editEmail (key) {
      this.$firebase.database().ref('ramais/' + key).set({
        nome: this.editingNome[key],
        setor: this.editingSetor[key],
        telefoneum: this.editingTelefoneum[key],
        telefonedois: this.editingTelefonedois[key],
        email: this.editingEmail[key]
      })
        .then((data) => {
          this.editingMovie[key] = null
          this.editFormMode = []
        })
    },
    deleteMovie (key) {
      this.$firebase.database().ref('ramais/' + key).remove()
    },
    fetchFirebaseData () {
      this.$firebase.database().ref('ramais').on('value', (snapshot) => {
        this.fireData = snapshot.val()
      })
    }
  },
  created () {
    this.fetchFirebaseData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
  width: 25%;
}
</style>
