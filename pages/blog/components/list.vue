<template>
  <div class="list">
    <div class="item" :style="itemStyle" v-for="item in data" :key="item.title">
      <a :href="item.url">
        <h1 :style="titleStyle">{{item.title}}</h1>
      </a>
      <p v-if="item.description">{{item.description}}</p>
    </div>
    <div v-if="ifPage">
      <div class="page pre">上一页</div>
      <div class="page next">下一页</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    ifPage: Boolean,
    isLarge: Boolean
  },
  computed: {
    itemStyle() {
      if (this.isLarge) {
        return {
          "border-bottom": "1px solid #eee"
        };
      }
    },
    titleStyle() {
      if (!this.isLarge) {
        return {
          "font-size": "22px "
        };
      }
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  margin-top: 40px;
  margin-bottom: 20px;
  font-family: "Lora", "Times New Roman", serif;

  .item {
    margin-bottom: 30px;
    h1 {
      font-weight: 600;
    }
    p {
      font-style: italic;
    }
    a {
      color: #212529;
      text-decoration: none;
    }
    a:hover {
      color: #0085a1;
    }
  }

  .page {
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #ddd;
  }
  .page:hover {
    color: #fff;
    background-color: #0085a1;
    border: 1px solid #0085a1;
  }
  .next {
    float: right;
  }
}
</style>