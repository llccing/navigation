<template>
  <div class="image"></div>
</template>
<style lang="less" scoped>
.image {
  width: auto;
  height: 400px;
  background-image: url("https://picsum.photos/1024/480/?image=58");
  background-size: 100%;
  background-position: top;

  z-index: 1;
  margin-top: -56px;
}

@media (max-width: 1000px) {
  .image {
    background-size: 1000px 400px;
  }
}
</style>