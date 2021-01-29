<template>
    <div>
        <myHeader>
          <div slot="title">记录</div>
        </myHeader>
          <div class="tableCell">
            <div class="iconfont iconrili"></div>
            <div class="tableCell_text">
              <div>十佳大学生</div>
              <div class="tableCell_text_content">
                <span class="content_flowChart">流程图</span>
                <span class="content_details">详情</span>
              </div>
            </div>
            <div class="judge">审核中</div>
          </div>
        <myFooter></myFooter>
    </div>
</template>

<script>
import myHeader from "@/components/header.vue"
import myFooter from '@/components/footer.vue'

export default {
  components: {
    myHeader,myFooter
  },
}
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
  margin-top: 0.5vw;
}
.content_flowChart{
  margin-left: 2vw;
}
.content_details{
  margin-left: 9vw;
}
.judge{
  flex: 1;
  font-size: 2vw;
  margin-bottom: 5vw;
}
</style>