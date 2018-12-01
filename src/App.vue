<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
/*导入字体*/
@font-face {
  font-family:'Poiret One';
  src:url('./assets/font/PoiretOne-Regular.ttf');
}
@font-face {
  font-family:'Matchbook';
  src:url('./assets/font/Matchbook.ttf');
}

  body{
    font-family: $my_ttf1;
    background: $my_gray1;
    a{
      text-decoration: none;
    }
  }
</style>
