<template>
  <div id="InGeneralInfo">
    <slot></slot>
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
#InGeneralInfo{
  width: 100%;
  height:35px;
  padding-top:35px;
  display: flex;
  justify-content:space-around;
}
</style>
