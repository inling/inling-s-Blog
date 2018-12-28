<template>
  <div id="InPanel" :style="{width:panelWidth,height:panelHeight}">
    <slot name="InFace"></slot>
    <slot name="InGeneralInfo"></slot>
    <slot name="InPanelTitle"></slot>
    <slot name="InPanelItem"></slot>
    <slot name="InCalendar"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    panelWidth:String,
    panelHeight:String
  }
}
</script>

<style lang="scss" scoped>
#InPanel{
  border-radius:6px;
  box-shadow: 0 0 4px rgba(5,5,5,0.3);
  background: white;
  transition: 0.3s background ease;
  overflow: hidden;
}
</style>