<template>
    <div id="InLogo">
        <slot name="InLogoText"></slot>
        <slot name="InLogoTag"></slot>
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
#InLogo{
    position: absolute;
    top:35px;
    left: 0px;
}
</style>