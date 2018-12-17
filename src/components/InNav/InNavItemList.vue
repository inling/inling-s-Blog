<template>
  <li id="InNavItemList">
    <router-link to="">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
#InNavItemList{
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

</style>