<template>
  <div id="InAside">
    <in-panel panelWidth='210px' panelHeight="170px">
      <in-face slot="InFace" :faceSrc="faceSrc">{{faceNmae}}</in-face>
    </in-panel>
  </div>
</template>

<script>
import InPanel from '@/components/InAsidePanel/InPanel.vue';
import InFace from '@/components/InAsidePanel/InFace.vue';
export default {
  data(){
    return {
      faceSrc:'img/face.jpeg',
      faceNmae:'御灵'
    }
  },
  components:{
    InPanel,
    InFace
  }
}
</script>

<style lang="scss" scoped>

</style>
