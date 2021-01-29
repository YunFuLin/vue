<template>
  <div class="box">
    <div class="icon"></div>
    <div class="inputBox">
      <input type="text" placeholder="用户名" v-model="username" /> <br />
      <input type="password" placeholder="密码" v-model="password" />
    </div>
    <div class="button" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'admin',
      password:'123456'
    };
  },
  methods: {
    login() {
      // 业务流程 
        // 获取后台信息,返回请求数据,进入首页
      console.log('账号:' + this.username,'密码:'+ this.password);
      this.$router.push({ path: "/index" });
      this.$toast.success('登录成功')
    },
  },
};
</script>

<style scoped>
.icon {
  width: 20vw;
  height: 20vw;
  background-color: pink;
  margin: 40vw auto 5vw;
}
.inputBox {
  padding: 0 0 0 10vw;
}
input {
  border: 1px solid #777;
  min-width: 75vw;
  height: 7vw;
  margin: 2vw 0;
  border-radius: 1vw;
  padding-left: 1vw;
}
.button {
  width: 75vw;
  height: 8vw;
  line-height: 8vw;
  background-color: #33cc99;
  border-radius: 1vw;
  color: #fff;
  text-align: center;
  margin: 9vw 12vw 0;
}
</style>