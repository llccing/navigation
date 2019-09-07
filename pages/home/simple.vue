<template>
  <div class="simple-index">
    <div class="logo">
      <h1>llccing</h1>
      <p>念念不忘，必有回响。</p>
    </div>
    <div class="link">
      <div class="item">
        <div class="title">
          <h2>练习</h2>
        </div>
        <div class="contents">
          <a href="/blog">【仿站】简单的blog</a>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <a href="https://llccing.github.io/FrontEnd/" target="_blank">
            <h2>Blog</h2>
          </a>
        </div>
        <div class="contents">
          <a
            href="https://llccing.github.io/FrontEnd/blog/vue-analysis/00-vue.html"
            target="_blank"
          >【JavaScript】Vue源码被解读</a>
        </div>
      </div>

      <div class="item">
        <div class="title">
          <h2>Demos</h2>
        </div>
        <div class="content">
           <a href="/demo/star/star"><h3>【嘿】来个五星好评吧！</h3></a>
           <a href="/demo/timer/"><h3>【Javascript】正计时/倒计时</h3></a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.simple-index {
  height: 100vh;

  .logo {
    padding-top: 20vh;
    text-align: center;
    h1 {
      font-size: 5rem;
    }
  }

  .link {
    padding-top: 5vh;
    display: flex;
    flex-wrap: wrap;

    .item {
      flex: 1 1;
      flex-basis: 400px;
      // border: 1px solid;
      margin: 10px;
      padding: 10px 20px;

      .title {
        h2{
          border-left: 5px solid #666;
          padding-left: 5px;
        }
        a {
          color: #212529;
        }
      }

      .content{
        h3{
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>