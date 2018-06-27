<template>
  <div id="homePage">
    <menu-header></menu-header>
    <!-- <menu-footer></menu-footer> -->
    12123123132
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
