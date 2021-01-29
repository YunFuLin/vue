<template>
  <div>
    <myHeader class="modification">
      <div slot="title">修改密码</div>
    </myHeader>
    <van-row class="cell cell_top">
      <van-col span="6" class="cell_left">*旧密码:</van-col>
      <van-col span="17" offset="1">
        <input type="text" placeholder="请输入" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="6" class="cell_left">*新密码:</van-col>
      <van-col span="17" offset="1">
        <input type="password" placeholder="请输入" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="6" class="cell_left">*确认密码:</van-col>
      <van-col span="17" offset="1">
        <input type="password" placeholder="请输入" />
      </van-col>
    </van-row>

    <p class="text">注: 6-14个字符。支持数字、大小写字母、标点符号〔例的Abcd,123)，不允许有空格。</p>

    <div class="confirm">确认</div>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";

export default {
  components: {
    myHeader,
  },
};
</script>

<style scoped>

input {
  border: 1px solid #ddd;
  border-radius: 1vw;
  width: 80%;
  height: 8vw;
  padding-left: 1vw;
  font-size: 3vw;
}
.cell {
  height: 12vw;
  line-height: 10vw;
  margin-top: 2vw;
}

.cell_left {
  text-align: right;
}
.cell_top{
    margin-top: 6vw;
}
.text{
    margin: auto;
    padding: 2vw;
    width: 73vw;
    color: #999;
    border: 1px solid #ddd;
}
.confirm{
    margin: 4vw auto;
    padding: 2vw;
    width: 73vw;
    border: 1px solid #009688;
    border-radius: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #009688;
}
</style>