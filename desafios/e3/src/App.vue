<template>
  <div id="app">
      <base-spinner/>
      <layout-notification/>
      <div class="container-fluid" v-if="isLogged">
        <div class="row">
          <div class="col-2 navigation-sidebar">
            <h1 class="app-title">Lista de ramais</h1>
            <layout-navigation/>
          </div>
          <div class="col">
        <router-view/>
          </div>
        </div>
      </div>
        <router-view v-else/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ isLogged: false }),
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
    })
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: var(--darker);
  color: white;
  .navigation-sidebar{
    background-color: var(--dark-medium);
    .app-title{
      font-size: 20pt;
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>
