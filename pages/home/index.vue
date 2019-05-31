<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#1890ff"
      >
        <el-submenu index="2">
          <template slot="title">机房管理</template>
          <el-menu-item index="2-1">待处理工单</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>

          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>

          <el-submenu index="2-4">
            <template slot="title">选项5</template>
            <el-menu-item index="2-4-1">选项51</el-menu-item>
            <el-menu-item index="2-4-2">选项51</el-menu-item>
            <el-menu-item index="2-4-3">选项53</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="1">
          <template slot="title">资源平台</template>

          <el-submenu>
            <template slot="title">设备管理</template>
            <el-menu-item>机柜管理</el-menu-item>
            <el-menu-item>机房列表</el-menu-item>
          </el-submenu>

          <el-submenu>
            <template slot="title">资源管理</template>
            <el-menu-item>资源分配</el-menu-item>
            <el-menu-item>资源回收</el-menu-item>
            <el-menu-item>配置修改</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-header>

    <el-main>
      <el-row :gutter="10">
        <el-col :span="8">{{menuData}}</el-col>
        <el-col :span="8">{{menuData}}</el-col>
        <el-col :span="8">{{menuData}}</el-col>
      </el-row>
    </el-main>

    <el-footer>
      <el-row>
        <el-col :span="8">
          <ul>
            <li>
              <a href="#">百度</a>
            </li>
            <li>
              <a href="#">百度</a>
            </li>
            <li>
              <a href="#">百度</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="8">
          <ul>
            <li>
              <a href="#">百度</a>
            </li>
            <li>
              <a href="#">百度</a>
            </li>
            <li>
              <a href="#">百度</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="8">
          <ul>
            <li>
              <a href="#">百度</a>
            </li>
            <li>
              <a href="#">百度</a>
            </li>
            <li>
              <a href="#">百度</a>
            </li>
          </ul>
        </el-col>
      </el-row>
      <!-- -->
    </el-footer>
  </el-container>
</template>

<script>
import menuData from "./menu";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    menuData() {
      return menuData;
    }
  }
};
</script>
<style scoped>
.el-header {
  background: #001529;
}

.el-footer {
  color: #fff;
  background-color: #001529;
  padding-top: 20px;
  padding-bottom: 20px;
  height: initial !important;
}

.el-footer ul {
  /* display: flex; */
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 20px;
}

.el-footer ul li {
  /* flex: 1; */
  padding: 0;
  /* text-align: center; */
  margin: 0;
  line-height: 30px;
}

.el-footer a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}
.el-footer a:hover {
  color: #1890ff;
}
</style>
