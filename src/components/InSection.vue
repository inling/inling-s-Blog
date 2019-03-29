<template>
    <div id="InSection">
        <in-s-panel panelWidth="682px" style="border:2px solid rgb(245,239,200)" class="saySomeCard saySomeBg">
            <in-textarea slot="saySomething" areaWidth="80%" areaHeight="80px" @stCallBack="getTextareaMsg" areaPlaceholder="说点儿什么吧...">
                <i slot="photoUpload" class="icon photo"></i>
            </in-textarea>        
            <transition name="fadeHO">
                <div class="publicSomething" v-show="isPublicSubmitShow"  tabindex="1" @focus="saySomefocus" @blur="saySomeBlur">
                    <div class="left">
                        <i class="icon face"></i>
                        <i class="icon aite"></i>
                        <i class="icon talk"></i>
                    </div>
                    <div class="right">
                        <in-drop-down-box firstItem="所有人可见" @dropShow="dropShowHandler">
                            可见范围：
                            <ul slot="option" v-show="isSelectOptionShow">
                                <li v-for="item in options" :key="item.value" v-text="item.title"></li>
                            </ul>
                        </in-drop-down-box>
                        <router-link to="" class="btn">发表</router-link>
                    </div>
                </div>
            </transition>
        </in-s-panel>
    </div>
</template>

<script>
import InSPanel from '@/components/InSectionPanel/InSPanel.vue';
import InTextarea from '@/components/InSaySomething/InTextarea.vue';
import InDropDownBox from '@/components/InDropDownBox/InDropDownBox.vue';

export default {
    data(){
        return {
            isPublicSubmitShow:false,
            isSelectOptionShow:false,
            options:[
                {value:0,title:'所有人可见'},
                {value:1,title:'部分好友可见'},
                {value:2,title:'仅自己可见'}
            ]
        }
    },
    methods:{
        getTextareaMsg(res){
            this.isPublicSubmitShow=res;
        },
        saySomefocus(){
            this.isPublicSubmitShow=true;
        },
        saySomeBlur(){
            this.isPublicSubmitShow=false;
        },
        dropShowHandler(res){
            this.isSelectOptionShow=res;
        }
    },
    components:{
        InSPanel,
        InTextarea,
        InDropDownBox
    }
}
</script>

<style lang="scss" scoped>
#InSection{
    .saySomeBg{
        background: url('../assets/image/aee00cdd4b4106f7bd7b761e85219bce.jpg') no-repeat top center;
        background-size:cover;
    }
    .saySomeCard{
        .photo{
            width: 50px;
            height:40px;
            background: url('../assets/icon/photo.png') no-repeat center center;
            opacity: 0.8;
        }
        .publicSomething{
            position:relative;
            width:100%;
            height: 40px;
            box-sizing: border-box;
            padding: 6px 5px 5px 10px;
            outline:0;
            border-top:1px solid rgb(245,239,200);
            .left{
                position:absolute;
                left:10px;
                .face,.aite,.talk{
                    cursor: pointer;
                    height:25px;
                    width:25px;
                }
                .face{
                    background:url('../assets/icon/face.png') no-repeat center center;
                    margin-left:5px;
                }
                .aite{
                    background:url('../assets/icon/aite.png') no-repeat center center;
                    margin-left:10px;
                }
                .talk{
                    background:url('../assets/icon/talk.png') no-repeat center center;
                    margin-left:10px;
                }
            }
            .right{
                position:absolute;
                right:10px;
            }
        }
        .fadeHO-enter-active,.fadeHO-leave-active{
            height:40px;
            padding: 6px 5px 5px 10px;
            border-top:1px solid rgb(245,239,200);
            transition:all .5s ease;
        }
        .fadeHO-enter,.fadeHO-leave-to{
            height:0;
            padding: 0 5px 0 10px;
            border-top:0;
            opacity: 1;
        }
    }
}
</style>