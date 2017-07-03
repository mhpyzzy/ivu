<template>
  <div id="app">
    <!--头部-->
    <i-row>
      <i-col>
        <div class="header">
          <p style="fontSize:28px">ivu</p>
          <p> a components for fast build web by vue.js</p>
        </div>
      </i-col>
    </i-row>

    <!--内容区-->
    <i-row>
      <!--左侧栏-->
      <i-col :span="4">
        <ul class="sideBar">
          <li v-for="(value,index) in componentList" 
            @click='curComponent=value'
            :key="index">{{value}}</li>
        </ul>
      </i-col>
      <!--内容区-->
      <i-col :span="18">
        <component :is="curComponent"></component>
      </i-col>
    </i-row>
  </div>
</template>

<script>
    import grid from './components/grid'
    import iButton from './components/iButton'
    const componentList={
      grid,iButton
    };

    export default {
      name: 'app',
      data(){
        return{
          curComponent:'grid',
          componentList:Object.keys(componentList)
        }
      },
      computed:{},
      components:componentList
    }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

.header{
  margin-bottom:50px;
}
</style>
