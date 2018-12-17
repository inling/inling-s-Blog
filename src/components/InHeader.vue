<template>
  <div id="InHeader">
    <in-logo>
      <in-logo-text slot="InLogoText">INLING's blog</in-logo-text>
      <in-logo-tag slot="InLogoTag">技术宅，喜欢二次元</in-logo-tag>
    </in-logo>

    <in-nav>
      <in-nav-item>
        <in-nav-item-list>HOME</in-nav-item-list>
        <in-nav-item-list>文章</in-nav-item-list>
        <in-nav-item-list>DIARY</in-nav-item-list>
        <in-nav-item-list>每周歌词</in-nav-item-list>
        <in-nav-item-list>工具</in-nav-item-list>
        <in-nav-item-list>留言板</in-nav-item-list>
        <in-nav-item-list>About</in-nav-item-list>
      </in-nav-item>
    </in-nav>

  </div>
</template>

<script>
import InLogo from '@/components/InLogo/InLogo.vue';
import InLogoText from '@/components/InLogo/InLogoText.vue';
import InLogoTag from '@/components/InLogo/InLogoTag.vue';
import InNav from '@/components/InNav/InNav.vue';
import InNavItem from '@/components/InNav/InNavItem.vue';
import InNavItemList from '@/components/InNav/InNavItemList.vue';
export default {
  data(){
    return {
      /*----------------------
        '0':first_order
        '1':second_order
        '2':third_order
        '3':fourth_order
        'num':(num+1)(En)_order
      ------------------------*/
      nav_list:[
        {
          '0':['HOME'],
          '1':[],
          '2':[]},
        {
          '0':['文章'],
          '1':[],
          '2':[]},
        {
          '0':['DIARY'],
          '1':[],
          '2':[]},
        {
          '0':['每周歌词'],
          '1':[],
          '2':[]},
        {
          '0':['工具'],
          '1':[],
          '2':[]},
        {
          '0':['留言板'],
          '1':[],
          '2':[]},
        {
          '0':['About'],
          '1':[],
          '2':[]},
      ]
    }
  },
  components:{
    InLogo,
    InLogoText,
    InLogoTag,
    InNav,
    InNavItem,
    InNavItemList
  }
}
</script>

<style lang="scss" scoped>
/*头部样式*/
#InHeader{
  width:1180px;
  height:150px;
  margin:0 auto;
  position:relative;
}
</style>

