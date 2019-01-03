<template>
  <div id="InSPanel" :style="{width:panelWidth,height:panelHeight}">
    <slot name="background"></slot>
    <slot name="saySomething"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props:{
    panelWidth:String,
    panelHeight:String
  }
}
</script>

<style lang="scss" scoped>
#InSPanel{
  border-radius:6px;
  box-shadow: 0 0 4px rgba(5,5,5,0.3);
  background: white;
  transition: 0.3s background ease;
  overflow: hidden;
}
</style>
