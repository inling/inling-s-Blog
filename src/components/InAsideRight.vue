<template>
  <div id="InAsideRight">
    <in-panel panelWidth="260px" panelHeight="360px" class="bg-img">
      <in-panel-title slot="InPanelTitle">
        <i slot="icon" class="icon calendar"></i>
        日历
      </in-panel-title>
      <in-calendar slot="InCalendar"></in-calendar>
    </in-panel>
  </div>
</template>

<script>
import InPanel from "@/components/InAsidePanel/InPanel.vue";
import InPanelTitle from "@/components/InAsidePanel/InPanelTitle.vue";
import InCalendar from "@/components/InAsidePanel/InCalendar.vue";
export default {
  data(){
    return{}
  },
  components:{
    InPanel,
    InPanelTitle,
    InCalendar
  }
}
</script>

<style lang="scss" scoped>
#InAsideRight{
  .bg-img{
    background:url('../assets/image/timg.jpg') no-repeat center center;
    background-size:cover;
    color:white;
  }
  .calendar{
    background:url('../assets/icon/calendar_white.png') no-repeat center center;
    width:18px;
    height:18px;
  }
}
</style>
