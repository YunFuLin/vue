<template>
  <div>
    <myHeader>
      <div slot="title">详情</div>
    </myHeader>

    <div>
      <div class="box">
        <div class="iconfont iconrili"></div>
        <div>01-02 10 : 53</div>
      </div>
      <p>xxx,请假类型:病假;请假时长:—天;请假理由:发烧;最终审核人:柳松</p>
    </div>
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
.box{
    display: flex;
}
.iconfont {
  width: 12vw;
  height: 80%;
  background-color: #009688;
  border-radius: 50%;
  color: #fff;
  font-size: 9vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>