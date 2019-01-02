<template>
  <div id="InTextarea">
    <textarea name="something" :style="{width:areaWidth,height:areaHeight}" :placeholder="areaPlaceholder"></textarea>
    <slot name="photoUpload"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props:{
    areaWidth:String,
    areaHeight:String,
    areaPlaceholder:String
  }
}
</script>

<style lang="scss" scoped>
#InTextarea{
  box-sizing: border-box;
  width: 100%;
  height:100%;
  padding:6px 5px 5px 10px;
  [name='something']{
    color:$my_orange;
    font-size: 20px;
    font-family: $Pinecone;
    font-weight: bold;
    border:none;
    resize:none;
    background:rgba(255,255,255,0.8);
    border-radius:2px;
    outline: none;
    padding-left:5px;
  }
}
</style>
