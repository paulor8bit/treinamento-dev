<template>
  <div class="page-title">
      <h1>
          <i v-if="icon" :class="icon"></i>
          {{main}}
        </h1>
        <h2>{{sub}}</h2>
        <hr>
  </div>
</template>

<script>
export default {
    name: 'PageTitle', 
    props: ['icons', 'main', 'sub']
}
</script>

<style>

</style>