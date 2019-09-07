  <template>
  <div class="container">
    <div class="not-found" v-if="error.statusCode === 404">
      <h1>404</h1>
      <p>您走丢了吧，😀</p>
      <b-button href="/">返回首页</b-button>
    </div>
    <div v-else>
      <h1>应用发生错误异常</h1>
      <b-button href="/">返回首页</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .not-found {
    width: 500px;
    border: 1px solid #ccc;
    padding: 20px;
    h1 {
      font-size: 5rem;
    }
    p {
      text-align: right;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>