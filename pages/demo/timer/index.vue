<template>
  <div class="links">
    <ul>
      <li v-for="item in links" :key="item.title">
        <a :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          link: "/demo/timer/timerDesc",
          title: "倒计时"
        },
        {
          link: "/demo/timer/timerAsc",
          title: "正计时"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.links {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px auto 20px;

  a::before {
    content: "⤴";
  }
}
</style>