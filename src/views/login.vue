<template>
    <article>
      <div class="addAlert" v-if="show">
        <p>账号：admin
          <input type="text" placeholder="name" v-model="nameVal">
        </p>
        <p>密码：123456
          <input type="password" placeholder="password" v-model="passwordVal" @keyup.enter="enter">
        </p>
        <div class="button">
          <input type="button" value="登录" @click="login()">
          <input type="button" value="注册" @click="jumpRegister()">
        </div>
      </div>
      <div class="addAlert extra" v-else>
        <p>邮箱：
          <input type="email" placeholder="email" v-model="emailVal">
        </p>
        <p>验证码：
          <span>
            <input type="text" placeholder="security code" v-model="codeVal">
            <input type="button" value="获取验证码" @click="securityCode">
          </span>
        </p>
        <p>账号：
          <input type="text" placeholder="name" v-model="nameVal">
        </p>
        <p>密码：
          <input type="password" placeholder="password" v-model="passwordVal">
        </p>
        <div class="button">
          <input type="button" value="返回" @click="back()">
          <input type="button" value="注册" @click="register()">
        </div>
      </div>
    </article>
</template>
<script>
export default {
  data () {
    return {
      show: true,
      nameVal: '',
      passwordVal: '',
      emailVal: '',
      codeVal: '',
      code: ''
    }
  },
  methods: {
    enter () { this.login() },
    a (n) { return n === null ? alert('登陆失败,账户或密码错误') : this.$router.push('/home') },
    login () {
      this.axios.get('http://sbcjc.site/index.php/login',
        {
          params: {
            nameVal: this.nameVal,
            passwordVal: this.passwordVal
          }
        })
        .then((response) => {
          this.a(response.data)
        }).catch((error) => {
          console.log('删除失败!' + error)
        })
    },
    jumpRegister () { this.show = false },
    back () { this.show = true },
    register () {
      this.axios.get('http://sbcjc.site/index.php/',
        {
          params: {
            codeVal: this.codeVal,
            nameVal: this.nameVal,
            passwordVal: this.passwordVal
          }
        })
        .then((response) => {
          console.log('删除成功!')
          console.log(response)
          this.arr = response.data
        }).catch((error) => {
          console.log('删除失败!' + error)
        })
    },
    securityCode () {
      this.axios.get('http://sbcjc.site/index.php/code',
        {
          params: {
            emailVal: this.emailVal
          }
        })
        .then((response) => {
          alert('注册成功！')
          console.log(response)
        })
    }
  }
}
</script>
<style scoped>
  article {
    width: 100%;
    height: 100%;
    background-color: #0f2d3fe7;
    user-select: none;
  }
  .addAlert {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    min-width: 200px;
    min-height: 220px;
    max-width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .addAlert>p {width: 80%;}
  /* 注册获取验证码 */
  .extra>p>span {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .extra>p>span>input[type="text"] {
    padding: 5px;
    width: 60%;
    border: 1px solid #00000060;
    border-radius: 5px;
  }
  .extra>p>span>input[type="button"] {
    padding: 0 5px;
    margin-left: 5px;
    border: 0;
    height: 32px;
    border-radius: 5px;
  }
    /* ================== */
  .addAlert>p>input[type="text"], .addAlert>p>input[type="password"], .addAlert>p>input[type="email"] {
    width: 95%;
    height: 20px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
    border: 1px solid #00000060;
    border-radius: 5px;
  }
  .addAlert>p>input[type="text"]:focus, .addAlert>p>input[type="password"]:focus, .addAlert>p>span>input[type="text"]:focus{
    outline: 0;
    box-shadow: 0px 0px 0px 1px black;
  }
  .button {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .button>input {
    border: 0;
    height: 40px;
    width: 60px;
    margin-right: 10%;
    border-radius: 5px;
    text-decoration-line: none;
    text-align: center;
    line-height: 40px;
    box-shadow: 0px 0px 0px 1px black;
  }
  .button>input:hover, .extra>p>span>input[type="button"]:hover {
    cursor: pointer;
    background-color: rgb(27, 165, 245);
  }
  .button>input:focus, .extra>p>span>input[type="button"]:focus{
    outline: 0;
    box-shadow: 0px 0px 0px 1px black;
  }
</style>
