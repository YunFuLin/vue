<template>
  <div class="applyReason">
    <van-row>
      <van-col span="7" class="cell_left"> *申请事由：</van-col>
      <van-col span="13">
        <textarea
          class="site"
          maxlength="3000"
          @input="descInput"
          v-model="desc"
          placeholder="1~3000个字"
        ></textarea>
        <div class="default">{{ remnant }}/3000</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remnant: 3000,
      desc: "",
    };
  },

  methods: {
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 3000 - txtVal;
    },
  },
};
</script>

<style lang="less" scoped>
.applyReason{
    border-bottom: 1px solid #ddd;
    padding: 2.5vw 0;
}
.cell_left{
    text-align: right;
}
.default{
    color: #5F6368;
    text-align: right;
}
textarea {
  border: 2px dashed #ddd;
  border-radius: 5px;
  width: 55vw;
  height: 25vw;
  max-width: 55vw;
  max-height: 25vw;
}
</style>