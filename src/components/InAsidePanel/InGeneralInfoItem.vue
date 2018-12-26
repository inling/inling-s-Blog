<template>
  <div id="InGeneralInfoItem">
    <slot name="num"></slot>
    <br>
    <slot name="category"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
#InGeneralInfoItem{
  text-align: center;
  font-size:12px;
  transition: color ease .2s;
  cursor: pointer;
  &:hover{
    color:$my_blue1;
  }
}
</style>
