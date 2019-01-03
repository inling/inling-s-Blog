<template>
    <div id="InSection">
        <in-s-panel panelWidth="682px" style="border:2px solid rgb(245,239,200)" class="saySomeBg">
            <in-textarea slot="saySomething" areaWidth="80%" areaHeight="80px" areaPlaceholder="说点儿什么吧...">
                <i slot="photoUpload" class="icon photo"></i>
            </in-textarea>
            
            <div class="publicSomething">
                
            </div>
        </in-s-panel>
    </div>
</template>

<script>
import InSPanel from '@/components/InSectionPanel/InSPanel.vue';
import InTextarea from '@/components/InSaySomething/InTextarea.vue';

export default {
    data(){
        return {

        }
    },
    components:{
        InSPanel,
        InTextarea
    }
}
</script>

<style lang="scss" scoped>
#InSection{
    .saySomeBg{
        background: url('../assets/image/aee00cdd4b4106f7bd7b761e85219bce.jpg') no-repeat center center;
        background-size:cover;
        .photo{
            width: 50px;
            height:40px;
            background: url('../assets/icon/photo.png') no-repeat center center;
            opacity: 0.8;
        }
        .publicSomething{
            width:100%;
            height: 40px;
            box-sizing: border-box;
            padding: 6px 5px 5px 10px;
            border-top:1px solid rgb(245,239,200);
        }
    }
}
</style>