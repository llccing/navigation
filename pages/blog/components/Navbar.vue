<template>
  <b-navbar class="my-navbar" toggleable="sm">
    <b-navbar-brand href="/blog">llccing</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/blog">主页</b-nav-item>
        <b-nav-item href="/blog/archives">归档</b-nav-item>
        <b-nav-item href="/blog/tag">标签</b-nav-item>
        <b-nav-item href="/blog/categories">分类</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style lang="less" scoped>
.my-navbar {
  z-index: 2;

  .navbar-brand,
  .nav-link {
    color: #fff;
  }
}
</style>