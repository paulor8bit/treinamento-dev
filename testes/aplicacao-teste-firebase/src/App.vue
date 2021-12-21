<template>
  <div id="app">
      <base-spinner/>
      <layout-notification/>
      <!-- <button @click="mostrarSpinner()"> -->
        <!-- Mostrar Spinner -->
      <!-- </button> -->
      <!-- <h1>01</h1> -->
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/login">Login</router-link> -->
      <div class="container-fluid" v-if="isLogged">
        <div class="row">
          <div class="col-2 navigation-sidebar">
            <h1 class="app-title">Expense</h1>
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
import BaseSpinner from './components/global/BaseSpinner'
import LayoutNavigation from './components/layout/LayoutNavigation'
import LayoutNotification from './components/layout/LayoutNotification'
export default {
  name: 'App',
  components: {
    BaseSpinner,
    LayoutNavigation,
    LayoutNotification
  },
  data: () => ({ isLogged: false }),
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
      this.$router.push({ name: window.uid ? 'Home' : 'Login' })

      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
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
