<template>
  <div class="leave">
    <myHeader>
      <div slot="title">请假申请</div>
      <div slot="up" @click="submit">提交</div>
    </myHeader>

    <van-row class="cell">
      <van-col span="7" class="cell_left">*假期类型：</van-col>
      <van-col span="17">
        <select class="select">
          <option value="none" selected disabled hidden>请选择类型</option>
          <option>广州</option>
          <option>深圳</option>
          <option>山东</option>
          <option>北京</option>
        </select>
      </van-col>
    </van-row>
    <van-row class="cell">
      <van-col span="7" class="cell_left">*申请单位：</van-col>
      <van-col span="17">
        <select>
          <option value="none" selected disabled hidden>
            请选择单位
          </option>
          <option>广州</option>
          <option>深圳</option>
          <option>山东</option>
          <option>北京</option>
        </select>
      </van-col>
    </van-row>
    <!-- 选择开始时间 -->
    <van-row class="cell">
      <van-col span="7" class="cell_left">*开始时间：</van-col>
      <van-col span="17" class="cell_right" @click="showPopup">
       {{ timeValue }}
      </van-col>
    </van-row>
    <!-- 开始时间弹窗 -->
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        title="选择时间"
        :formatter="formatter"
        @cancel="show = false"
        @confirm="confirmPicker"
      />
    </van-popup>
    <!-- 选择结束时间 -->
    <van-row class="cell">
      <van-col span="7" class="cell_left">*结束时间：</van-col>
      <van-col span="17" class="cell_right" @click="myShowPopup">
        {{ myTimeValue }}
      </van-col>
    </van-row>
    <!-- 结束时间弹窗 -->
    <van-popup v-model="myShow" position="bottom">
      <van-datetime-picker
        v-model="myCurrentDate"
        type="datetime"
        :min-date="myMinDate"
        :formatter="formatter"
        @cancel="myShow = false"
        @confirm="myConfirmPicker"
      />
    </van-popup>
    <van-row class="cell">
      <van-col span="7" class="cell_left">*申请时长：</van-col>
      <van-col span="17">
        <input class="num" type="text" placeholder="大于0的整数">小时
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
      // 开始时间的默认数据
      timeValue: "年 / 月 / 日 -:-",
      show: false,
      currentDate: new Date(),
      className: "",

      // 结束时间的默认数据
      myTimeValue: "年 / 月 / 日 -:-", // 显示时间的内容
      myShow: false, // 是否显示模态框
      myCurrentDate: new Date(),
      myMinDate: new Date(), // 最小可以选择的时间
      myClassName: "", // 设置选中后的颜色
    };
  },
  components: {
    myHeader,
    applyReason,
  },
  methods: {
    // 提交
    submit() {
      this.$dialog.confirm({
        title: "提交",
        message: "是否确认提交",
      })
        .then(() => {
          // 确认回调
        })
        .catch(() => {
          // 取消回调
        });
    },
    // 选项格式化函数
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      } else if (type === "second") {
        return `${value}秒`;
      }
      return value;
    },
    // 时间换算
    time(val) {
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      let hour = val.getHours();
      let minute = val.getMinutes();
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`;
      }
      if (hour >= 0 && hour <= 9) {
        hour = `0${hour}`;
      }
      if (minute >= 0 && minute <= 9) {
        minute = `0${minute}`;
      }
      return `${year}-${month}-${day} ${hour}:${minute}`;
    },
    // 开始时间的操作
    // 显示弹窗
    showPopup() {
      this.show = true;
    },
    // 确认选择的时间
    confirmPicker(val) {
      this.myMinDate = new Date(val);
      let calculateTime = this.time(val); // 联动结束时间
      this.className = "timeClass";
      this.timeValue = calculateTime;
      this.show = false;
    },

    // 结束时间的操作
    // 显示弹窗
    myShowPopup() {
      if(isNaN(Date.parse(this.timeValue))){
          this.$toast.fail({ message: "请先选择开始时间", icon: "cross" });
          return;
      }
      this.myShow = true;
    },
    // 选择结束时间
    myConfirmPicker(val) {
      let calculateTime = this.time(val);
      this.myClassName = "timeClass";
      this.myTimeValue = calculateTime;
      this.myShow = false;
    },
  },
};
</script>

<style lang='less' scoped>
.leave{
  font-size: 4vw;
}
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #999999;
}
.cell_right {
  color: #999;
}
.num{
  width: 30vw;
}
</style>