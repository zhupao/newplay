<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>
<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'

export default {
  name: 'app',
  components: { PageHeader, PageFooter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252C48;
}
body{
  font-family: "微软雅黑 ";
}
</style>
