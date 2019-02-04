<template>
    <div class="header">
        <a href="javascript:void(0)" class="iconfont icon-fanhui1 goback"></a>
        <i class="icon-Magnifier iconfont"></i>
        <input type="text" placeholder="丽江" class="header-search">
        <a href="javascript:void(0)" class="iconfont icon-gengduo more"></a>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
    .header {
        position: fixed;
        width: 100%;
        max-width: 640px;
        line-height: 44px;
        padding: 0 44px;
        box-sizing: border-box;
        text-align: center;
        background-color: #00bcd4;
        .header-search {
            width: 100%;
            height: 30px;
            margin: 7px 0;
            box-sizing: border-box;
            padding-left: 40px;
            border-radius: 30px;
            color: #333;
        }
        .goback {
            position: absolute;
            left: 10px;
            color:#fff;
            font-size: 24px;
        }
        .more {
            position: absolute;
            right: 10px;
            color:#fff;
            font-size: 24px;
        }
        i {
            position: absolute;
            left: 60px;
            top: 22px;
            transform: translateY(-50%);
            color: #ddd;
            font-size: 16px;
        }

    }
</style>