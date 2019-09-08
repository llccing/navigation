<template>
  <div class="my-blog">
    <listContent/> 
  </div>
</template>
<script>
import listContent from "./home/List";
export default {
  layout: "blog",
  components: {
    listContent
  }
};
</script>