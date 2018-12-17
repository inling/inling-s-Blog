<template>
  <div id="InHome">
    <in-header></in-header>
    <div id="InBody"> 
      <in-aside></in-aside>
      <InSection></InSection>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InHeader from '@/components/InHeader.vue';
import InAside from '@/components/InAside.vue';
export default {
  name: 'home',
  components: {
    InHeader,
    InAside,
    InSection:()=>import('@/components/InSection.vue')
  }
}
</script>

<style lang="scss" scoped>
#InHome{
  #InBody{
    width:1180px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
  }
}
</style>

