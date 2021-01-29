<template>
  <div>
    <h1>测试页面</h1>
    <van-cell title="开始时间" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />


    <van-cell title="结束时间" :value="myDate" @click="myShow = true" />
    <van-calendar v-model="myShow" @confirm="MyOnConfirm" :min-date="minDate" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      show: false,

      myDate:'',
      myShow:false,
      minDate: new Date(),
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      this.minDate = new Date(date)
    },
    MyOnConfirm(date){
      this.myShow = false;
      this.myDate = this.formatDate(date);
    }
  },
};
</script>

<style>
</style>