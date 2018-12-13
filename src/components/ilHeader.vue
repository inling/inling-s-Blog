<template>
  <div id="ilHeader">
    <my-logo>
      <my-logo-text slot="MyLogoText"></my-logo-text>
      <my-logo-tag slot="MyLogoTag"></my-logo-tag>
    </my-logo>

    <div id="global_nav">
      <ul id="global_nav_ul">
        <li v-for="(item,i) in nav_list" :key="i">
          <router-link to="/" v-text="item[0][0]"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyLogo from '@/components/MyLogo/MyLogo.vue';
import MyLogoText from '@/components/MyLogo/MyLogoText.vue';
import MyLogoTag from '@/components/MyLogo/MyLogoTag.vue';
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
    MyLogo,
    MyLogoText,
    MyLogoTag
  }
}
</script>

<style lang="scss" scoped>
/*头部样式*/
#ilHeader{
  width:1180px;
  height:150px;
  margin:0 auto;
  position:relative;
  #global_nav{
    height:50px;
    position: absolute;
    right:0px;
    top:50px;
    #global_nav_ul{
      li{
        float: left;
        a{
          font-size:12px;
          padding:0 30px;
          background:$my_gray2;
          border-left:1px solid $my_gray8;
          text-align: center;
          color:$my_gray7;
          display: block;
          height:50px;
          line-height: 50px;
          transition: all .2s linear;
          &:hover{
            background:$my_gray9;
            color:$my_gray10;
          }
        }
        &:first-child{
          a{
            border:none;
            border-radius:7px 0 0 7px;
          }
        }
        &:last-child{
          a{
            border:none;
            border-radius:0 7px 7px 0;
          }
        }
      }
    }
  }
}
</style>

