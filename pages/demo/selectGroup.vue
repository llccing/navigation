<template>
  <div class="select-group">
    <h1>select group</h1>
    <el-table :data="tableData">
      <el-table-column prop="type">
        <template slot-scope="scope">
          <el-select v-model="scope.row.type" @change="getModel(scope.$index)">
            <el-option v-for="(item, idx) in scope.row.typeData" :key="idx" :value="item.id" :label="item.name"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="name">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="model">
        <template slot-scope="scope">
          <el-select v-model="scope.row.model">
            <el-option v-for="(item, idx) in scope.row.modelData" :key="idx" :value="item.id" :label="item.name"></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="success" @click="getData">get data</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    init() {
      let data = [
        {
          type: 1,
          name: '王小虎',
          model: 1,
          typeData: [{ id: 1, name: '1111' }, { id: 2, name: '2222' }, { id: 3, name: '3333' }],
          modelData: [],
        },
        {
          type: 2,
          name: '王小虎',
          model: 2,
          typeData: [{ id: 1, name: '1111' }, { id: 2, name: '2222' }, { id: 3, name: '3333' }],
          modelData: [],
        },
        {
          type: 2,
          name: '王小虎',
          model: 3,
          typeData: [{ id: 1, name: '1111' }, { id: 2, name: '2222' }, { id: 3, name: '3333' }],
          modelData: [],
        },
      ]

      data.forEach(item => {
        let modelData = [{ id: 1, name: 'model1'+item.type }, { id: 2, name: 'model2'+item.type }, { id: 3, name: 'model3'+item.type }]
        item.modelData = modelData
      })

      console.log(data)

      this.tableData = data
    },  
    getModel(idx) {
      console.log(123)
      console.log(this.tableData)
      let tempModelData = [{ id: 1, name: 'model1' }, { id: 2, name: 'model2' }, { id: 3, name: 'model3' }]
      this.tableData[idx].modelData = tempModelData
    },

    getData(){
      console.log(this.tableData)
      console.dir(this.tableData)
    }
  },
  mounted() {
    this.init()
  },
}
</script>
