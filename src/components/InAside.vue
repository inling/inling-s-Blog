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
    <in-panel panelWidth="210px" style="margin-top:20px">
      <in-panel-title slot="InPanelTitle"> 
        <i slot="icon" class="icon pageNavigation"></i>
        页面导航
      </in-panel-title>
      <in-panel-item slot="InPanelItem">
        <in-panel-item-list>
          <i slot="icon" class="icon bookList"></i>
          我的书单
        </in-panel-item-list>
        <in-panel-item-list>
          <i slot="icon" class="icon movies"></i>
          电影清单
        </in-panel-item-list>
      </in-panel-item>
    </in-panel>
    <in-panel panelWidth="210px" style="margin-top:20px">
      <in-panel-title slot="InPanelTitle">
        <i icon="icon" class="icon topic"></i>
        知识点
      </in-panel-title>
      <in-panel-item slot="InPanelItem">
        <in-panel-item-list>
          HTML 5
        </in-panel-item-list>
        <in-panel-item-list>
          CSS 3
        </in-panel-item-list>
        <in-panel-item-list>
          ES6
        </in-panel-item-list>
        <in-panel-item-list>
          VUE.JS
        </in-panel-item-list>
        <in-panel-item-list>
          REACT
        </in-panel-item-list>
      </in-panel-item>
    </in-panel>
  </div>
</template>

<script>
import InPanel from '@/components/InAsidePanel/InPanel.vue';
import InFace from '@/components/InAsidePanel/InFace.vue';
import InGeneralInfo from '@/components/InAsidePanel/InGeneralInfo.vue';
import InGeneralInfoItem from '@/components/InAsidePanel/InGeneralInfoItem.vue';
import InPanelTitle from '@/components/InAsidePanel/InPanelTitle.vue';
import InPanelItem from '@/components/InAsidePanel/InPanelItem.vue';
import InPanelItemList from '@/components/InAsidePanel/InPanelItemList.vue';

export default {
  data(){
    return {
      faceSrc:'users/17621305739/Image/CurrentHead/face.jpeg',
      faceNmae:'御灵'
    }
  },
  components:{
    InPanel,
    InFace,
    InGeneralInfo,
    InGeneralInfoItem,
    InPanelTitle,
    InPanelItem,
    InPanelItemList
  }
}
</script>

<style lang="scss" scoped>
#InAside{
  .pageNavigation{
    background: url('../assets/icon/nav.png') no-repeat center center;
    width: 18px;
    height: 18px;
  }
  .bookList{
    background: url('../assets/icon/books.png') no-repeat center center;
    width: 18px;
    height: 18px;
  }
  .movies{
    background: url('../assets/icon/movies.png') no-repeat center center;
    width: 18px;
    height: 18px;
  }
  .topic{
    background: url('../assets/icon/topic.png') no-repeat center center;
    width: 18px;
    height: 18px;
  }
}
</style>
