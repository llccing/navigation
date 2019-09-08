<template>
  <div class="article">
    <div class="intro">
      <div class="tags">
        <a href="/blog/tag/123">#TAG 1</a>
        <a href="/blog/tag/123">#TAG 2</a>
        <a href="/blog/tag/123">#TAG 3</a>
      </div>
      <div class="categories">
        <a href="/blog/categories/123">CATEGORY 1</a>
        /
        <a href="/blog/categories/123">CATEGORY 2</a>
      </div>
    </div>
    <div class="content">
      <p>Welcome the Clean Blog</p>

      <p>It is based on vue-bootstrap and vue.</p>

      <p>Feel free to explore the other posts to check out the features supported.</p>

      <p>This a fully reponsive theme adapated from [http://startbootstrap.com/template-overviews/clean-blog/]</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blog"
};
</script>
<style lang="less" scoped>
.article {
  margin-top: 40px;
  .intro {
    display: flex;
    justify-content: space-between;
    a {
      margin-right: 10px;
      border-bottom: 1px dotted #ababab;
      color: #666;
      text-decoration: none;
    }
    a:hover {
      color: #0085a1;
    }
  }
  .content {
    margin-top: 40px;
    font-size: 20px;
  }
}
</style>