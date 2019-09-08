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
          title: "Welcome to Clean Blog",
          description: "Posted by Klug Jo on March 14th 2016",
          url: "/blog/article/123"
        },
        {
          title: "Images",
          description: "December 26th 2019",
          url: "/blog/article/123"
        }
      ]
    };
  }
};
</script>