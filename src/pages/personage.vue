<template>
  <div>
    <div class="headPortrait">
      <div class="exit" @click="deleteuserinfo">退出</div>
      <div class="headPortrait_box">
        <div class="headPortrait_img"></div>
        <p class="studentNumber">学号: 1234567890</p>
      </div>
    </div>

    <!-- 可封装为组件 -->
    <router-link :to="{ name: 'personalInformation' }" class="route">
      <div class="tableCell">
        <div class="tableCell_title">个人信息</div>
        <div class="tableCell_text">
          <span class="tableCell_text_left">编辑</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <router-link :to="{ name: 'modification' }" class="route">
      <div class="tableCell">
        <div class="tableCell_title">修改密码</div>
        <div class="tableCell_text">
          <span class="tableCell_text_left">修改</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </router-link>

    <div class="tableCell">
      <div class="tableCell_title">通知提醒</div>
      <div class="tableCell_text">
        <van-switch
          v-model="checked"
          active-color="#00E266"
          inactive-color="#dcdee0"
          class="tableCell_text_button"
        />
      </div>
    </div>

      <div class="tableCell">
        <div class="tableCell_title">版本更新</div>
        <div class="tableCell_text">
          <span class="tableCell_text_left">已是最新版本</span>
          <van-icon name="arrow" />
        </div>
      </div>

    <router-link :to="{ name: 'aboutUs' }" class="route">
    <div class="tableCell">
      <div class="tableCell_title">关于我们</div>
      <div class="tableCell_text">
        <span class="tableCell_text_left">西安外事学院</span>
          <van-icon name="arrow" />
      </div>
    </div>
    </router-link>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from "@/components/footer.vue";
import { Switch } from "vant";

export default {
  data() {
    return {
      checked: true,
    };
  },
  components: {
    myFooter,
    "van-switch": Switch,
  },
  methods: {
    deleteuserinfo() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.headPortrait {
  width: 100vw;
  height: 40vw;
  background-color: #009688;
  position: relative;
  color: #fff;
}
.exit {
  position: absolute;
  right: 2vw;
  top: 2vw;
}
.headPortrait_box {
  width: 60vw;
  height: 27vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.headPortrait_img {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  background-color: pink;
}
.studentNumber {
  margin-top: 1vw;
}
.route {
  color: black;
}


.tableCell {
  height: 11vw;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tableCell_title {
  margin-left: 1vw;
}
.tableCell_text {
  margin-right: 1vw;
  display: flex;
  align-items: center;
}
.tableCell_text_left {
  margin: 0 2vw;
  color: #6e6e6e;
  font-size: 3vw;
}
.tableCell_text_button {
  font-size: 6vw;
}
</style>