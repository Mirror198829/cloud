<template>
  <div>
    <header id="header">
    	<img id="loginLogo" src="../assets/logo.png" height="24" width="103">
    </header>
  </div>
</template>

<script>
export default {
  name: 'menuHeader',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="less">
@import '../less/index.less';
#header{height: 50px;background-color:@theme-color;}
#loginLogo{position: absolute;left:20px;top:15px;}
</style>
