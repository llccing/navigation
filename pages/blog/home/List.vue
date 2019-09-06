<template>
  <div class="list">
    <b-container>
      <b-row>
        <b-col lg="8" offset-lg="1" md="10" offset-md="1">
          <div class="item">
            <a href="#">
              <h1>Welcome to Clean Blog</h1>
            </a>
            <p>Posted by Klug Jo on March 14th 2016</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>Images</h1>
            </a>
            <p>December 26th 2013</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>Untitled</h1>
            </a>
            <p>December 25th 2013</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>Excerpts</h1>
            </a>
            <p>December 25th 2013</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>Videos</h1>
            </a>
            <p>December 25th 2013</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>Gallery Post</h1>
            </a>
            <p>December 25th 2013</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>日本語テスト</h1>
            </a>
            <p>December 25th 2013</p>
          </div>
          <div class="item">
            <a href="#">
              <h1>中文測試</h1>
            </a>
            <p>December 24th 2013</p>
          </div>
        </b-col>

        <b-col lg="8" offset-lg="1" md="10" offset-md="1">
          <div class="page pre">上一页</div>
          <div class="page next">下一页</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style lang="less" scoped>
.list {
  margin-top: 40px;
  margin-bottom: 20px;

  .item {
    margin-bottom: 30px;
    border-bottom: 1px solid #eee;

    a {
      color: #212529;
    }
    a:hover {
      color: #337ab7;
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