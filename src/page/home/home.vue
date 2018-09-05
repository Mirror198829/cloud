<template>
  <div id="homePage">
    <menu-header class="menuHeader" style="z-index:1000"></menu-header>
    <router-view class="routerMain"/>
  </div>
</template>

<script>
import MenuHeader from '@/components/menuHeader'
export default {
  name: 'HomePage',
  components:{
    'menu-header':MenuHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.menuHeader{position:fixed;top:0;left:0;right:0;z-index:9999;}
#homePage{height:100%;}
.routerMain{height:100%;background-color: #fff;padding-top:60px;box-sizing: border-box;}
</style>
