<template>
  <div id="Header">
    <div id="logo-text">
      <h1 id="logo">
        <router-link to="/">INLING's blog</router-link>
      </h1>
      <h2 id="tag">技术宅，喜欢二次元</h2>
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
/*头部样式*/
#Header{
  width:1180px;
  height:150px;
  margin:0 auto;
  position:relative;

  #logo-text{
    #logo{
      font-family: $my_ttf2
    }
  }
}
</style>

