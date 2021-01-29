<template>
  <div>
    <myHeader>
      <div slot="title">缓缴申请</div>
      <div slot="up">提交</div>
    </myHeader>
    <van-row class="cell">
      <van-col span="7" class="cell_left">*实际金额：</van-col>
      <van-col span="17">
        <input type="text" placeholder="0">
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*实缴金额：</van-col>
      <van-col span="17">
        <input type="text" placeholder="0">
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*缓缴金额：</van-col>
      <van-col span="17">
        <input type="text" placeholder="0">
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">缓缴时长：</van-col>
      <van-col span="17">
        <input type="text" placeholder=">=6个月">
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
.cell {
  height: 12vw;
  line-height: 10vw;
  border-bottom: 1px solid #ddd;
}
.cell_left {
  text-align: right;
}

</style>