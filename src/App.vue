<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
/*导入字体*/
  @font-face {
      font-family:'Poiret One';
      src:url('./common/font/PoiretOne-Regular.ttf');
  }
  @font-face {
      font-family:'Matchbook';
      src:url('./common/font/Matchbook.ttf');
  }

/*公共样式*/
  /*字体*/
  $my_ttf1:微软雅黑, 宋体, Arial, sans-serif;
  $my_ttf2:'Poiret One',Arial,sans-serif;
  $my_ttf3:'Matchbook',Arial,sans-serif;
  /*颜色*/
  $my_gray1:rgb(211, 214, 216);
  $my_gray2:#b9b9b9;
  $my_gray3:#9fa3a4;
  $my_gray4:#818487;
  $my_violet:#F231BE;
  $my_blue:#24DEFF;
  $my_green:#27D338;
  $my_yellow:#ffcc00;

  body{
    font-family: $my_ttf1;
    background: $my_gray1;
  }
</style>
