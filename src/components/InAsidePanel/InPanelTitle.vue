<template>
  <div id="InPanelTitle">
    <slot name="icon"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#InPanelTitle{
  font-size:14px;
  padding: 8px 16px;
  background:rgba(0,0,0,0.05);
}
</style>
