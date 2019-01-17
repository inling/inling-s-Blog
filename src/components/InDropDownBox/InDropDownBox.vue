<template>
  <div id="InDropDownBox" @mouseover="dropDownMouseover" @mouseout="dropDownMouseout">
    <div class="boxTitle">
      <slot></slot>
    </div>
    <div class="boxContent">
      {{firstItem}}
      <div class="drapDownBox">
        <slot name="option"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    dropDownMouseover(){
      this.$emit('dropShow',true);
    },
    dropDownMouseout(){
      this.$emit('dropShow',false);
    }
  },
  props:{
    'firstItem':String
  }
}
</script>

<style lang="scss" scoped>
#InDropDownBox{
  display: inline-block;
  font-size: 12px;
  .boxTitle{
    display: inline-block;
    color:white;
  }
  .boxContent{
    display: inline-block;
    position: relative;
    cursor: pointer;
    width:100px;
    color:white;
    height:24px;
    line-height: 24px;
    .drapDownBox{
      position: absolute;
      bottom:20px;
      left:-10px;
      color:black;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,.16);
      border-radius: 5px 5px 0 0;
      ul{
        li{
          cursor: pointer;
          transition:all .2s ease;
          height:24px;
          line-height:24px;
          padding:0 10px 0 10px;
          &:hover{
            background:$my_gray11;
          }
        }
      }
    }
  }
}
</style>
