<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    max-height="550"
    v-loading="loading"
  >
    <el-table-column prop="date" label="Date" width="220" />
    <el-table-column prop="name" label="Name" width="220" />
    <el-table-column prop="state" label="State" width="220" />
    <el-table-column prop="city" label="City" width="220" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="ZIP" width="220" />
    <el-table-column fixed="right" label="Operations" width="220">
      <template #default="scope">
        <el-button
          type="text"
          size="small"
          @click.prevent="del(scope.$index)"
        >
          del
        </el-button>
        <el-button
          type="text"
          size="small"
          @click.prevent="edit(scope.row)"
        >
          edit
        </el-button>
        <el-button
          type="text"
          size="small"
          @click.prevent="view(scope.row)"
        >
          view
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button style="width: 100%" @click="onAddItem">Add Item</el-button>

  <!-- 弹窗 -->
  <FromDialog ref="FromDialogRef" />
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import FromDialog from './tableForm.vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const FromDialogRef = ref(null)
let loading = ref(false)
const tableData = reactive([
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
]);
const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return "warning-row";
  } else {
    return "success-row";
  }
};

// 删除
const del = (index) => {
  ElMessageBox.confirm(`确定删除所选项吗?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    loading.value = true
    setTimeout(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      tableData.splice(index, 1)
      loading.value = false
    },1000)
  }).catch(() => {})
};
// 查看
const view = (row) => {
  console.log(row,'row-->>')
  FromDialogRef.value.init('view', '', row)
};
// 修改
const edit = (row) => {
  console.log(row,'row-->>')
  FromDialogRef.value.init('edit', '', row)
};
//  增加
const onAddItem = () => {
  tableData.push({
    date: getDate(0),
    name: 'wft',
    state: '0',
    city: 'City',
    address: 'address',
    zip: 'ZIP'
  });
};

function getDate(num) {
  var date1 = new Date();
  //今天时间
  var time1 =
    date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + num);
  //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
  var time2 =
    addZero(date2.getFullYear()) +
    "-" +
    addZero(date2.getMonth() + 1) +
    "-" +
    addZero(date2.getDate());
  return time2;
}

function addZero(num) {
  //补0方法
  if (parseInt(num) < 10) {
    num = "0" + num;
  }
  return num;
}
</script>
<style scoped>
:deep(.warning-row) {
  background: #ffffff !important;
}

:deep(.success-row) {
  background: #fdf6ec !important;
}
</style>