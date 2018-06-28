<template>
  <div id="homePage">
    <menu-header></menu-header>
    <!-- <menu-footer></menu-footer> -->
    <div style="height:1000px;background-color:#333"></div>
  </div>
</template>

<script>
import MenuHeader from '@/components/menuHeader'
export default {
  name: 'HomePage',
  components:{
    'menu-header':MenuHeader,
    // 'menu-footer':MenuFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
