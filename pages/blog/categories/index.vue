<template>
  <list :isLarge="false" :data="list" />
</template>
<script>
import list from "../components/list";
export default {
  layout: "blog",
  components: {
    list
  },
  data() {
    return {
      list: [
        {
          title: "Category 1",
          url: "/blog/categories/1"
        },
        {
          title: "Category 2",
          url: "/blog/tag/1"
        },
        {
          title: "Category 4324",
          url: "/blog/tag/1"
        },
        {
          title: "jojo 1",
          url: "/blog/tag/1"
        }
      ]
    };
  }
};
</script>