<template>
    <div class="contentbg">
      <div class="logoInBox">
        <h4 class="text-center title-text">私募中国信息平台</h4>
        <div>
          <p class="user">
            <input class="inputInit"  v-model="user.usercode"  type="number" placeholder="用户编号" required="required" maxlength="8" >
          </p>
          <p class="user">
            <input class="userPw inputInit" v-model="user.password" type="password"  placeholder="用户密码" required="required" >
          </p>
          <p class="user" style="text-align: left">
            <input type="text" id="Txtidcode" class="txtVerification inputInit"  placeholder="验证码" style="width: 40%;margin-right: 2%">
            <span id="idcode"></span>
          </p>
          <p class="user text-center subContent">
            <router-link to="/index">
                <input v-on:click="fetchData"  type="button" class="btn btnSub" value="立即登录"/>
            </router-link>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'logincontent',
  data () {
    return {
      user: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    fetchData: function () {
      console.log(this.user.usercode)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentbg{
  background: url("../../assets/loginimages/log_in_bgpic.jpg");
  height: 96vh;
}
#ehong-code-input{
  width:42px;
  letter-spacing:2px;
  margin:0px 8px 0px 0px;
}
.ehong-idcode-val{
  position:relative;
  padding:1px 4px 1px 4px;
  top:0px;
  *top:-3px;
  letter-spacing:4px;
  display:inline;
  cursor:pointer;
  font-size:16px;
  font-family:"Courier New", Courier, monospace;
  text-decoration:none;
  font-weight:bold;
}
.ehong-idcode-val0{
  border:solid 1px #A4CDED;
  background-color:#ECFAFB;
}

.ehong-idcode-val1{
  border:solid 1px #A4CDED;
  background-color:#FCEFCF;
}
.ehong-idcode-val2{
  border:solid 1px #6C9;
  background-color:#D0F0DF;
}
.ehong-idcode-val3{
  border:solid 1px #6C9;
  background-color:#DCDDD8;
}
.ehong-idcode-val4{
  border:solid 1px #6C9;
  background-color:#F1DEFF;
}
.ehong-idcode-val5{
  border:solid 1px #6C9;
  background-color:#ACE1F1;
}
.ehong-code-val-tip{
  font-size:12px;
  color:#1098EC;
  top:0px;
  *top:-3px;
  position:relative;
  margin:0px 0px 0px 4px;
  cursor:pointer;
}

/*公共样式*/
.title-text{
  color: #fff;
  font-weight: bold;
  margin: 2rem 0 1.5rem;
}
.inputInit{
  font-size: 1.2rem;
  border: 0;
  line-height: 0.9rem;
  padding-left: 2rem;
  border-radius: .3rem;
  outline: none;
  color: #333;
}
.logoInBox{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 22rem;
  height: 24rem;
  background: #252C48;
  border-radius: .15rem;
  color: #fff;
  box-shadow: 0 3px 15px #000;
  margin-top: -5rem;
  margin-left: -6.5rem;
}
.user{
  width: 80%;
  margin: 0 auto;
}
.userPw{
  margin: 16px 0;
}
.btnSub{
  font-size: 1.3rem;
  border: 0;
  width: 100%;
  padding: .3rem;
  border-radius: .15rem;
  cursor: pointer;
  color: #fff;
  background: #ff9900;
  background: -webkit-linear-gradient(right top, #e3724f,#e98b57); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right top, #e3724f,#e98b57); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right top, #e3724f,#e98b57); /* Firefox 3.6 - 15 */
  background: linear-gradient(right top, #e3724f,#e98b57); /* 标准的语法（必须放在最后） */
}
</style>
