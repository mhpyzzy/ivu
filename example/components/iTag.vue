<template>
  <i-row :gutter="20">
      <i-col class="m">
        <i-tag>default</i-tag>
        <i-tag type="gray" >gray</i-tag>
        <i-tag type="primary">主要按钮</i-tag>
        <i-tag type="success">success</i-tag>
        <i-tag type="warning">warning</i-tag>
        <i-tag type="danger">danger</i-tag>
      </i-col>
      <i-col class="m">
        <i-tag shadow>default</i-tag>
        <i-tag type="gray" shadow>shadow</i-tag>
        <i-tag type="primary" shadow>shadow</i-tag>
        <i-tag type="success" shadow>shadow</i-tag>
        <i-tag type="warning" shadow>shadow</i-tag>
        <i-tag type="danger" shadow>shadow</i-tag>
      </i-col>
      <i-col class="m">
        <i-tag :tagStyle="customTagStyle">自定义样式</i-tag>
      </i-col>
  </i-row>
</template>

<script>
    export default {
        name:'i_tag',
        data(){
            return{
                customTagStyle:{
                    backgroundColor:'red',
                    lineHeight:'30px',
                    boxShadow:'1px 1px 0 gray',
                    color:'#fff'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .m{
        margin-bottom:50px;
    }
</style>
