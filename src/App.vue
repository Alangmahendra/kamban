<template>
  <div id="app">
    <headers/>
    <router-view/>
  </div>
</template>

<script>
import headers from '@/components/Header'
export default {
  name: 'App',
  components:{headers},
  data(){
    return{
    
    }
  },
  methods : {
    
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
}
</style>
