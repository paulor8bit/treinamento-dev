<template>
  <div class="w-100 d-flex justify-content-center">
    <button

      @click="showModal = true"
      class="btn btn-lg btn-outline-primary w-75"
    >
      <i class="fa fa-plus"></i>
      Ramal
    </button>

    <form @submit.prevent="submit()">
      <div
        class="modal fade"
        :class="{show: showModal}"
        :style="{display: showModal ? 'block' : 'none'}"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Adicionar um novo Contato</h5>
              <button
                type="button"
                class="close"
                @click="closeModal()"
              >
                <span>x</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="form-group col-8">
                  <!-- Valor que vai ao BD -->
                  <label for="">Nome</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.nome"
                  >
                  <!-- Nome, Setor, Telefone1, Telefone2, Email -->
                </div>
                <div class="form-group col-4">
                  <label for="">Setor</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.setor"
                  >
                </div>
                <div class="form-group col-4">
                  <!-- Valor que vai ao BD -->
                  <label for="">Telefone 1 </label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.telefoneum"
                  >

                </div>
                <div class="form-group col-4">
                  <label for="">Telefone 2</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.telefonedois"
                  >
                </div>
                <div class="form-group col-4">
                  <label for="">Email</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-model="form.email"
                  >
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal()"
              >
                Fechar
              </button>
              <button class="btn btn-primary" :disabled="loading">
                <template v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                  Incluindo...
                </template>
                <template v-else>
                  Incluir novo Contato
                </template>
              </button>
              <table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div
      :class="{show: showModal}"
      class="modal-backdrop fade"
      :style="{display: showModal ? 'block' : 'none'}"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    showModal: false,
    form: {
      nome: '',
      setor: '',
      telefoneum: '',
      telefonedois: '',
      email: ''
    }
  }),
  computed: {
    fileName () {
      const { receipt } = this.form
      if (receipt) {
        const split = receipt.name.split('.')
        return `${split[0]}-${new Date().getTime()}.${split[1]}`
      } else {
        return ''
      }
    }
  },
  methods: {
    openFileDialog () {
      this.$refs.input.value = null
      this.$refs.input.click()
    },
    handleFile ({ target }) {
      this.form.receipt = target.files[0]
    },
    async submit () {
      let url = ''
      this.loading = true
      try {
        this.$root.$emit('Spinner::show')
        const ref = this.$firebase.database().ref('ramais')
        const id = ref.push().key
        if (this.form.receipt) {
          const snapshot = await this.$firebase.storage()
            .ref('ramais')
            .child(this.fileName)
            .put(this.form.receipt)
          url = await snapshot.ref.getDownloadURL()
        }
        const payload = {
          id,
          ...this.form,
          receipt: url,
          createdAt: new Date().getTime()
        }
        ref.child(id).set(payload, err => {
          if (err) {
            this.$root.$emit('Notification::show', {
              type: 'danger',
              message: 'Não foi possível inserir, tente novamente.'
            })
            this.loading = false
          } else {
            this.$root.$emit('Notification::show', {
              type: 'success',
              message: 'Inserido com sucesso.'
            })
            this.closeModal()
            this.loading = false
          }
        })
      } catch (err) {
        this.$root.$emit('Notification::show', {
          type: 'danger',
          message: 'Não foi possível inserir, tente novamente.'
        })
        this.loading = false
      } finally {
        this.$root.$emit('Spinner::hide')
        this.loading = false
      }
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.modal {
  color: var(--darker);
}
</style>
