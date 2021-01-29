<template>
  <div class="footer">
    <div
      class="footer_tab"
      v-for="item in tab"
      :key="item.id"
      @click="jump(item.id)"
      :class="isSelect == item.url ? 'mycolor' : ''"
    >
      <span class="iconfont" :class="item.icon"></span>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: [
        {
          id: "1",
          name: "主页",
          icon: "iconnavicon-zhtdwh",
          url: "index",
        },
        {
          id: "2",
          name: "记录",
          icon: "iconicon-test",
          url: "record",
        },
        {
          id: "3",
          name: "消息",
          icon: "iconnavicon-zhtdwh",
          url: "information",
        },
        {
          id: "4",
          name: "我的",
          icon: "iconrili",
          url: "personage",
        },
      ],
    };
  },
  computed: {
    isSelect() {
      return this.$route.name;
    },
  },
  methods: {
    jump(id) {
      if (id == 1) {
        this.$router.push({ path: "/index" });
      } else if (id == 2) {
        this.$router.push({ path: "/record" });
      } else if (id == 3) {
        this.$router.push({ path: "/information" });
      } else if (id == 4) {
        this.$router.push({ path: "/personage" });
      }
    },
  },
};
</script>

<style scoped>
.footer {
  border-top: 1px solid #ddd;
  font-size: 2vw;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 13vw;
  display: flex;
  justify-content: space-between;
}
.footer_tab {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.iconfont {
  font-size: 7vw !important;
}
.mycolor {
  color: #009688;
}
</style>