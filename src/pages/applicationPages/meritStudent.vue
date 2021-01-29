<template>
  <div>
    <myHeader>
      <div slot="title">三好学生</div>
      <div slot="up">提交</div>
    </myHeader>
    <applyReason></applyReason>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue"
import applyReason from '@/components/applyReason.vue'
export default {
  components: {
    myHeader,applyReason
  },
};
</script>

<style scoped>
</style>