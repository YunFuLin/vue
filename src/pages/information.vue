<template>
  <div>
    <myHeader>
      <div slot="title">消息</div>
    </myHeader>

    <div class="tableCell">
      <div class="iconfont iconrili"></div>
      <div class="tableCell_text" @click="jump">
        <div>系统消息</div>
        <div class="tableCell_text_content">
         xxx, 您国家奖学金已通过最终审核
        </div>
      </div>
      <div class="judge">02-06 &nbsp; 10:23</div>
    </div>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";

export default {
  components: {
    myHeader,
    myFooter,
  },
  methods:{
    jump(){
      this.$router.push({ path: "/messageDetails" });
    }
  }
};
</script>

<style scoped>
.tableCell{
  width: 100vw;
  height: 15vw;
  padding: 0 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.iconfont{
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
.tableCell_text{
  flex: 2;
  margin-left: 2vw;
}
.tableCell_text_content{
  color: #ddd;
  font-size: 2vw;
}
.judge{
  flex: 1;
  font-size: 2vw;
  margin-bottom: 5vw;
  color: #ddd;
}
</style>