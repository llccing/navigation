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
          title: "tag 1",
          url: "/blog/tag/1"
        },
        {
          title: "tag 2",
          url: "/blog/tag/1"
        },
        {
          title: "hexo",
          url: "/blog/tag/1"
        },
        {
          title: "hexo",
          url: "/blog/tag/1"
        }
      ]
    };
  }
};
</script>