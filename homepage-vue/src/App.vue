<template>
<!--ヘッダー-->
<Header />

<router-view/>

<!--フッター-->
<Footer />


</template>

<script>
import Header from './components/modules/HeaderModule.vue'
import Footer from './components/modules/FooterModule.vue'


export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    
  }
}
</script>

<style scaped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
