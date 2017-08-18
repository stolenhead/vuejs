<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-lg-5 col-md-5 col-sm-12">
        <mapa :show="true" id="map" class="align"></mapa>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-12">
         <contenedor :show="contenedor"></contenedor>
      </div>
    </div>
  </div>
</template>

<script>
import { Mapa, Contenedor } from 'components'
export default {
  components: {
    Mapa,
    Contenedor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
