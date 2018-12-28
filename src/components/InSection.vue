<template>
    <div id="InSection">
        <in-s-panel panelWidth="682px" panelHeight="200px">
            <!--<div slot="background" class="bg-img"></div>-->
        </in-s-panel>
    </div>
</template>

<script>
import InSPanel from '@/components/InSectionPanel/InSPanel.vue';

export default {
    data(){
        return {

        }
    },
    components:{
        InSPanel
    }
}
</script>

<style lang="scss" scoped>
.bg-img{
    background: url('../assets/image/0008020910479544_b.jpg') no-repeat center center;
    background-size:cover;
}
</style>