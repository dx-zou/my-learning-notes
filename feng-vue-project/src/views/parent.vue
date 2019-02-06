<template>
    <div>
        <h1>parent</h1>
        <child @changeData="change" :c-msg="msg"></child>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import child from "@/components/child.vue"
export default {
    name: 'parent',
    data() {
        return {
            msg: 'hellooooo'
        }
    },
    methods: {
        change(a) {
            this.msg = a
        }
    },
    components: {
        child
    }
}
</script>

<style lang="less" scoped>
    h1 {
        font-size: 30px
    }
</style>