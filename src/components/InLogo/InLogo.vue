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
    top:40px;
    left: 0px;
}
@media screen and (max-width: 1180px) {
    #InLogo{
        left: 20px;
    }
}
</style>