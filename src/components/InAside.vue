<template>
  <div id="InAside">
    <in-panel panelWidth="210px" panelHeight="170px">
      <in-face slot="InFace" :faceSrc="faceSrc">{{faceNmae}}</in-face>
      <in-general-info slot="InGeneralInfo">
        <in-general-info-item>
          <span slot="num">105</span>
          <span slot="category">文章</span>
        </in-general-info-item>
        <in-general-info-item>
          <span slot="num">143</span>
          <span slot="category">评论</span>
        </in-general-info-item>
        <in-general-info-item>
          <span slot="num">5</span>
          <span slot="category">分类</span>
        </in-general-info-item>
      </in-general-info>
    </in-panel>
    <in-panel panelWidth="210px"></in-panel>
  </div>
</template>

<script>
import InPanel from '@/components/InAsidePanel/InPanel.vue';
import InFace from '@/components/InAsidePanel/InFace.vue';
import InGeneralInfo from '@/components/InAsidePanel/InGeneralInfo.vue';
import InGeneralInfoItem from '@/components/InAsidePanel/InGeneralInfoItem.vue';
export default {
  data(){
    return {
      faceSrc:'img/face.jpeg',
      faceNmae:'御灵'
    }
  },
  components:{
    InPanel,
    InFace,
    InGeneralInfo,
    InGeneralInfoItem
  }
}
</script>

<style lang="scss" scoped>

</style>
