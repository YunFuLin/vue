<template>
  <div>
    <myHeader>
      <div slot="title">三好学生</div>
      <div slot="up">提交</div>
    </myHeader>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*类型：</van-col>
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
      <van-col span="7" class="cell_left">*级别：</van-col>
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

    <applyReason></applyReason>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import applyReason from "@/components/applyReason.vue";
export default {
  components: {
    myHeader,
    applyReason,
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