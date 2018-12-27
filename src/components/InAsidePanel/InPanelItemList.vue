<template>
  <div id="InPanelItemList">
    <router-link to='/'>
      <slot name="icon"></slot>
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
#InPanelItemList{
  width: 100%;
  border-bottom: 1px solid #ebeef2;
  a{
    display: block;
    font-size: 14px;
    color:black;
    padding:12px;
    text-align: center;
    transition: color ease .2s;
    &:hover{
      color:$my_violet;
    }
  }
}
</style>
