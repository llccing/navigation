<template>
  <div class="wrapper">
    <h1>我帅吗，请给我的帅气评价！</h1>
    <div class="star">
      <div
        class="item"
        v-for="(item, idx) in stars"
        @mouseenter="mouseenter(idx)"
        @mouseleave="reset(0)"
        @click="clickLight(idx)"
      >
        <img :src="item.url" :alt="item.alt" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      star: 0,
      stars: [],
      click: false
    };
  },
  methods: {
    light(idx) {
      const arr = [];

      switch (idx) {
        case 0:
        case 1:
          for (let i = 0; i < 5; i++) {
            if (i <= idx) {
              arr.push({
                url: require("~/assets/img/face/face1.png"),
                alt: "生气脸"
              });
            } else {
              arr.push({
                url: require("~/assets/img/face/default2.png"),
                alt: "默认脸"
              });
            }
          }
          break;
        case 2:
        case 3:
          for (let i = 0; i < 5; i++) {
            if (i <= idx) {
              arr.push({
                url: require("~/assets/img/face/face2.png"),
                alt: "正常脸"
              });
            } else {
              arr.push({
                url: require("~/assets/img/face/default2.png"),
                alt: "默认脸"
              });
            }
          }
          break;
        case 4:
          for (let i = 0; i < 5; i++) {
            arr.push({
              url: require("~/assets/img/face/face3.png"),
              alt: "开心脸"
            });
          }
      }

      this.stars = arr;
    },
    clickLight() {
      this.click = true;
    },
    mouseenter(idx) {
      this.click = false;
      this.light(idx);
    },
    reset() {
      if (this.click) {
        return;
      }
      const arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push({
          url: require("~/assets/img/face/default2.png"),
          alt: "默认脸"
        });
      }
      this.stars = arr;
    }
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      this.stars.push({
        url: require("~/assets/img/face/default2.png"),
        alt: "默认脸"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  .star {
    display: flex;
    justify-content: center;
    .item {
      padding: 0 2px;
      flex-basis: 50px;
      cursor: pointer;

      img {
        width: 100%;
      }
    }
  }
}
</style>