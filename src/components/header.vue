<template>
  <div class="header">
    <div class="left" @click="back">
      <van-icon class="left_icon" name="arrow-left" />
    </div>
    <slot name="title">
      <div></div>
    </slot>

    <!-- 提交元素 -->
    <div class="right">
      <slot name="up">
        <div></div>
      </slot>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    "van-icon": Icon,
  },
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 12vw;
  line-height: 10vw;
  background-color: #009688;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 10vw;
  height: 12vw;
  .left_icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 11vw;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>