<template>
  <div class="home">
    <InHeader></InHeader>
    <InSection></InSection>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    InHeader:()=>import('@/components/InHeader.vue'),
    InSection:()=>import('@/components/InSection.vue')
  }
}
</script>
