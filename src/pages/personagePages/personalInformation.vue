<template>
  <div>
    <myHeader>
      <div slot="title">个人信息</div>
      <div slot="up">保存</div>
    </myHeader>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*姓名：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="1-30个字符" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*手机：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="11位正规手机号格式" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">性别：</van-col>
      <van-col span="17">
        <select>
          <option value="none" selected disabled hidden>请选择类型</option>
          <option>男</option>
          <option>女</option>
        </select>
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">出生日期：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="年 / 月 / 日" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*籍贯：</van-col>
      <van-col span="17">
        <select class="select">
          <option value="none" selected disabled hidden>请选择</option>
          <option>广州</option>
          <option>深圳</option>
          <option>山东</option>
          <option>北京</option>
        </select>
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*身份证号：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="正规身份证格式" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">户口所在地：</van-col>
      <van-col span="17">
        <select class="select">
          <option value="none" selected disabled hidden>请选择</option>
          <option>广州</option>
          <option>深圳</option>
          <option>山东</option>
          <option>北京</option>
        </select>
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">民族：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="1-20个字符" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">通讯地址：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="1-40个字符" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">个人邮箱：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="正规邮箱格式" />
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">紧急联系人：</van-col>
      <van-col span="17">
        <input class="name" type="text" placeholder="1-50个字符" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    myHeader,
  },
};
</script>

<style scoped>
select {
  width: 80%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #999999;
}
.cell {
  height: 11vw;
  line-height: 10vw;
  border-bottom: 1px solid #ddd;
}
.cell_left {
  text-align: right;
}
</style>