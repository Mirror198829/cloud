<!-- 
- Author:CaoJing
- Date:2018/6/28
- github:https://github.com/Mirror198829
-->
<template>
  <div>
    <div class="swtichBtn" @click="switchLang">
      <i class="fa fa-language switchLangIcon"></i>
      <a>{{$t('message.langSwitch')}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'langSwitch',
  data () {
    return {}
  },
  methods:{
    switchLang(){
      this.$i18n.locale = (this.$i18n.locale == 'cn')?'en':'cn'
    }
  },
  mounted(){},
  created(){}
}
</script>

<style scoped lang="less">
@import '../less/index.less';
.swtichBtn{color:@font-white;cursor: pointer;height:100%;user-select:none;}
.swtichBtn:hover{color:@theme-color;margin-left:2px;}
.switchLangIcon{margin-right: 5px;}
</style>
