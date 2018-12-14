<template>
  <div class="home">
    <ilHeader></ilHeader>
    <ilSection></ilSection>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    ilHeader:()=>import('@/components/ilHeader.vue'),
    ilSection:()=>import('@/components/ilSection.vue')
  }
}
</script>
