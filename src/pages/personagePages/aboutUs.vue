<template>
  <div>
    <myHeader>
      <div slot="title">关于我们</div>
    </myHeader>
    <p class="box">
        西安外事学院是一所联遇世界的大学，与海内外知名学府、企业联合培养人才。地处十三胡古都西安。国家级高新区腹地。被上千家高新企业环抱。这所大学以本科教育为主体，并同海内外知名大学联办研完生教育。形成了以经、管、文.医、工、艺、农、教协调发展的学科专业体系。加以独特的创新创业教育.国际化教育、德育教育三大办学特色。发展个性。注重养成，守护你独一无二的未来。
    </p>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue"

export default {
  components: {
    myHeader,
  },
};
</script>

<style scoped>
.box{
    font-size: 3.5vw;
    padding: 4.5vw;
}
</style>