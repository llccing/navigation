<template>
  <div class="my-blog">
    <Navbar />
    <Photo />
    <b-container>
      <b-row>
        <b-col lg="8" offset-lg="1" md="10" offset-md="1">
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from "../pages/blog/components/Navbar";
import Photo from "../pages/blog/components/Photo";
export default {
  components: {
    Navbar,
    Photo
  }
};
</script>
<style lang="less">
.my-blog {
  font-family: "Lora", "Times New Roman", serif;
}
</style>