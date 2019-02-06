<template>
    <div id="">
        <input type="text" v-model="val" @input="print">
    </div>
</template>

<script>
export default {
    name:'child',
    props: ['c-msg'],
    data() {
        return {
            val:''
        }
    },
    methods: {
       print() {
           this.$emit('changeData',this.val)
       } 
    },
}
</script>

<style lang="less" scoped>
    input {
        border: 2px solid royalblue
    }
</style>