<template>
  <div id="InPanel" :style="{width:panelWidth,height:panelHeight}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    panelWidth:Number,
    panelHeight:Number
  }
}
</script>

<style lang="scss" scoped>
#InPanel{
  border-radius:6px;
  box-shadow: 0 0 4px rgba(5,5,5,0.3);
  transition: 0.3s background ease;
}
</style>