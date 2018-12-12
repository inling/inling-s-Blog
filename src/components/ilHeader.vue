<template>
  <div id="ilHeader">
    <div id="logo">
      <h1 id="logo_text">
        <router-link to="/">INLING's blog</router-link>
      </h1>
      <h2 id="logo_tag">技术宅，喜欢二次元</h2>
    </div>
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

  #logo{
    position: absolute;
    top:30px;
    left: 0px;
    #logo_text{
      font-family: $my_ttf2;
      font-size: $my_logo_size;
      font-weight: normal;
      -webkit-text-stroke: 0.5px;
      a{
        display: block;
        color:$my_gray2;
        transition: color 0.2s ease-in-out;
        &:hover{
          color:$my_violet;
        }
      }
    }
    #logo_tag{
      font-size: 10px;
      font-weight: normal;
      color:$my_gray6;
      margin-top:10px;
    }
  }

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

