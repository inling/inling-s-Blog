<template>
  <div id="InHome">
    <in-header></in-header>
    <div id="InBody"> 
      <in-aside-left></in-aside-left>
      <in-section></in-section>
      <in-aside-right></in-aside-right>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InHeader from '@/components/InHeader.vue';
import InAsideLeft from '@/components/InAsideLeft.vue';
import InAsideRight from '@/components/InAsideRight.vue';
export default {
  name: 'home',
  components: {
    InHeader,
    InAsideLeft,
    InAsideRight,
    InSection:()=>import('@/components/InSection.vue')
  }
}
</script>

<style lang="scss" scoped>
#InHome{
  #InBody{
    width:1180px;
    margin:0 auto;
    padding: 0 20px;
    display:flex;
    justify-content: space-between;
  }
}
</style>

