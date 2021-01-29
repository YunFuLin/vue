<template>
  <div>
    <myHeader>
      <div slot="title">申请</div>
    </myHeader>

    <div class="content">
      <div>
        <router-link :to="{ name: 'nationalScholarship' }" class="router">
          <span class="iconfont">&#xe621;</span>
          <span>国家奖学金</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'encouragement' }" class="router">
          <span class="iconfont">&#xe667;</span>
          <span>国家励志奖学金</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'encouragement' }" class="router">
          <span class="iconfont">&#xe63b;</span>
          <span>国家助学金</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'meritStudent' }" class="router">
          <span class="iconfont">&#xe621;</span>
          <span>三好学生</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'meritStudent' }" class="router">
          <span class="iconfont">&#xe645;</span>
          <span>优秀学生干部</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'meritStudent' }" class="router">
          <span class="iconfont">&#xe798;</span>
          <span>优秀毕业生</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'meritStudent' }" class="router">
          <span class="iconfont">&#xe654;</span>
          <span>优秀毕业生干部</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'meritStudent' }" class="router">
          <span class="iconfont">&#xe90f;</span>
          <span>十大之星</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'meritStudent' }" class="router">
          <span class="iconfont">&#xe603;</span>
          <span>十佳大学生</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'leave' }" class="router">
          <span class="iconfont">&#xe685;</span>
          <span>请假</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'discipline' }" class="router">
          <span class="iconfont">&#xe63c;</span>
          <span>违纪撤销</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'delayPayment' }" class="router">
          <span class="iconfont">&#xe621;</span>
          <span>缓缴通道</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'leave' }" class="router">
          <span class="iconfont">&#xe665;</span>
          <span>家庭困难认定</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'delayPayment' }" class="router">
          <span class="iconfont">&#xe675;</span>
          <span>绿色通道</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'delayPayment' }" class="router">
          <span class="iconfont">&#xe621;</span>
          <span>困难补助</span>
        </router-link>
      </div>
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
};
</script>

<style lang="less" scoped>
/* 内容部分 */
.content {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 2.5vw;
  // 子级dom元素
}
.router {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30vw;
  height: 30vw;
  color: black;
}

// 可删除
.content > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30vw;
  height: 30vw;
}
/* 图标大小设置 */
.iconfont {
  font-size: 8vw !important;
  color: #009688;
}
</style>