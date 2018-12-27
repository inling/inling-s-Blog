<template>
  <div id="InNav">
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
#InNav{
  height:50px;
  position: absolute;
  right:0px;
  top:50px;
}
@media screen and (max-width: 1180px) {
    #InNav{
        top:40px;
    }
}
</style>