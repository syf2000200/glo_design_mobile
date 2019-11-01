<template>
    <div class="gc-nav" :class="{ 'is-fixed': fixed }">
        <div class="gc-nav__button is-left">
            <slot name="left"></slot>
        </div>
        <h1 class="gc-nav__title" v-text="title"></h1>
        <div class="gc-nav__button is-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
import create from '../utils/create-basic'
export default create({
    name: 'navBar',
    props: {
        fixed: Boolean,
        title: String
    }
})
</script>