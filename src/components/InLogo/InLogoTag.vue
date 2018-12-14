<template>
    <div id="InLogoTag">
        <slot></slot>
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
#InLogoTag{
    font-size: 10px;
    font-weight: normal;
    color:$my_gray6;
    margin-top:10px;
}
</style>