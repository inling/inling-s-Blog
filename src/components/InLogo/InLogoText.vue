<template>
    <div id="InLogoText">
        <router-link to="/">
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
#InLogoText{
    font-family: $my_ttf2;
    font-size: $my_logo_size;
    font-weight: normal;
    -webkit-text-stroke: 0.5px;
    a{
        display: block;
        color:$my_gray2;
        transition: color 0.2s ease-in-out;
        &:hover{
            color:$my_violet;
        }
    } 
}
</style>