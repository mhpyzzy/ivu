<template>
  <div id="app">
    <i-row class="" :gutter="15">
      <i-col :md="8" :push="8">
        <div class="b primary">test1</div>
      </i-col>
      <i-col :md="8">
        <div class="success">test2</div>
      </i-col>
      <i-col :md="8" :pull="8">
        <div class="primary">test3</div>
      </i-col>
      <i-col class="success" >
        <div class="success">test4</div>
      </i-col>
      <!--<i-col class="primary" :span="3">test5</i-col>
      <i-col class="success" :span="3">test5</i-col>
      <i-col class="primary" :span="3">test5</i-col>
      <i-col class="success" :span="3">test5</i-col>-->
    </i-row>
    <i-row class="success"></i-row>
    <i-row class="warning"></i-row>
    <i-row class="black"></i-row>
    <i-row class="blacker"></i-row>
    <i-row class="blackest"></i-row>
    <!--<hello></hello>-->
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
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
.b{
  border-radius:8px;
}
</style>
