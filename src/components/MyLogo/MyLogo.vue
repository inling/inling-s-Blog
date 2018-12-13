<template>
    <div id="MyLogo">
        <slot name="MyLogoText"></slot>
        <slot name="MyLogoTag"></slot>
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
#MyLogo{
    position: absolute;
    top:30px;
    left: 0px;
}
</style>