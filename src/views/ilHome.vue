<template>
  <div class="home">
    <ilHeader></ilHeader>
    <ilSection></ilSection>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ilHeader:()=>import('@/components/ilHeader.vue'),
    ilSection:()=>import('@/components/ilSection.vue')
  }
}
</script>
