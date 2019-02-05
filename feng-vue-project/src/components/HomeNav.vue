<template>
    <div class="home-nav">
        <ul class="nav-list">
            <li v-for="item of list" :key="item.id" @click="item.flag = !item.flag" >
                {{item.title}}
                <i :class="['iconfont' ,item.flag?'icon-arrLeft-fill':'icon-arr-top']"></i>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeNav',
    data() {
        return {
            list: [
                {id:1,title:'全部分类', flag: true,},
                {id:2,title:'综合排序', flag: true,},
                {id:3,title:'品质/价格', flag: true,},
                {id:4,title:'筛选', flag: true,},
            ]
        }
    },
    methods: {
        
    },
}
</script>

<style lang="less">
    .home-nav {
        line-height: 40px;
        padding-top: 44px;
        color: #fff;
        background-color: #00bcd4;
        .nav-list {
            display: flex;
            li {
                flex:1;
                text-align: center;
            }
            .iconfont {
                vertical-align: middle;
            }
        }
    }
</style>