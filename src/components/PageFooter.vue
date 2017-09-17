<template>
  <div class="logoFootBox">
    <div class="logoFoot">
      泸ICP备26013910号-2 &nbsp;&nbsp;©CopyRight&nbsp;上海千领金融信息服务有限公司&nbsp;&nbsp;&nbsp;021-13501943836
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoFootBox{
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: #252C48;
  height: 4rem;
  width: 100%;
  color: #252C48;
  box-shadow: 0 0px 0.13rem #252C48;
}
.logoFoot{
  text-align: center;
  width: 78rem;
  margin: auto;
  color: #fff;
  font-size: 1.4rem;
  height: 4rem;
  line-height: 4rem;
}
</style>
