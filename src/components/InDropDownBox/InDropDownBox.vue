<template>
  <div id="InDropDownBox">
    <div class="boxTitle">可见范围：</div>
    <div class="boxContent">
      哈哈哈
      <ul class="drapDownBox">
        <li>123</li>
        <li>asdasd</li>
        <li>熟练度</li>
        <li>阿萨德</li>
        <li>我耳机</li>
      </ul>
    </div>
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
#InDropDownBox{
  .boxTitle{
    display: inline-block;
    color:white;
  }
  .boxContent{
    display: inline-block;
    position: relative;
    .drapDownBox{
      position: absolute;
      top:0;
      left:0;
    }
  }
}
</style>
