<template>
  <div>
    <div class="mui-btn " style="padding: 5px 20px;position: relative" @click="isGood">操作</div>
    <ul v-show="isShow" style="position: absolute;z-index: 10">
      <li>修改基本信息</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['goodOb'],
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    isGood: function () {
      console.log(this.goodOb)
      this.isShow = !this.isShow
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
