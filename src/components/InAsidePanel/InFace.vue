<template>
  <div id="InFace">
    <div class="circleBox">
      <div class="circleWrapper">
        <div class="circleBg">
          <div class="circleBg">
            <div class="circleBg">
              <div class="circleBg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img :src="faceSrc" class="face" alt="">
    <div class="nameBox">
      <p class="userName">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    faceSrc:String
  }
}
</script>

<style lang="scss" scoped>
#InFace{
  position: relative;
  .circleBox{
    background-color:$my_blue1;
    width:100%;
    height:64px;
    overflow:hidden;
    margin-bottom:30px;
    .circleWrapper{
      position: relative;
      width:100%;
      height:200px;
      text-align: center;
      top:-52px;
      &>.circleBg{
        border: 1px solid $my_blue2;
        border-radius: 50%;
        position: relative;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        margin: 5px;
        .circleBg{
          border: 1px solid $my_blue2;
          border-radius: 50%;
          position: relative;
          width: calc(100% - 30px);
          height: calc(100% - 30px);
          margin: 14px;
        }
      }
    }
  }
  .face{
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top:50%;
    left:50%;
    margin-left:-35px;
    margin-top:-16px;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover{
      transform: scale(1.15);
    }
  }
  .nameBox{
    width: 100%;
    position: absolute;
    text-align: center;
    margin-bottom: 16px;
    .userName{
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
