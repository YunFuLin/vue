<template>
  <div>
    <myHeader>
      <div slot="title">国家奖学金申请</div>
      <div slot="up">提交</div>
    </myHeader>
    <van-row class="cell" @click="show = true">
      <van-col span="7" class="cell_left">开始时间：</van-col>
      <van-col span="17" @click="show = true">
        {{ date }}
      </van-col>
    </van-row>
    <van-calendar v-model="show" @confirm="onConfirm" />

    <van-row class="cell" @click="finish">
      <van-col span="7" class="cell_left">结束时间：</van-col>
      <van-col span="17">
        {{ myDate }}
      </van-col>
    </van-row>
    <van-calendar v-model="myShow" @confirm="MyOnConfirm" :min-date="minDate" />

    <van-row class="cell">
      <van-col span="7" class="cell_left">*级别：</van-col>
      <van-col span="17">
        <select>
          <option value="none" selected disabled hidden>请选择单位</option>
          <option>广州</option>
          <option>深圳</option>
          <option>山东</option>
          <option>北京</option>
        </select>
      </van-col>
    </van-row>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*金额：</van-col>
      <van-col span="17">
        <select>
          <option value="none" selected disabled hidden>请选择单位</option>
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
  data() {
    return {
      date: "年 / 月 / 日",
      show: false,

      myDate: "年 / 月 / 日",
      myShow: false,
      minDate: new Date(),
    };
  },
  components: {
    myHeader,applyReason
  },
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;
    },
    onConfirm(date) {
      console.log(123);
      this.show = false;
      this.date = this.formatDate(date);
      this.minDate = new Date(date);
    },
    MyOnConfirm(date) {
      this.myShow = false;
      this.myDate = this.formatDate(date);
    },
    finish() {
      if (!isNaN(Date.parse(this.minDate))) {
        this.$toast.fail({ message: "请先选择开始时间", icon: "cross" });
        return;
      }
      this.myShow = true;
    },
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
select {
  width: 80%;
}
</style>