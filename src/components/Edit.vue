<script setup>
import { ref } from 'vue'
import axios from 'axios'
// TODO: 编辑

// 控制弹框打开关闭
const dialogVisible = ref(false)

// 表单数据
const form = ref({
  name: '',
  place: '',
})

// 打开弹框
const open = (item) => {
  const { name, place, id } = item
  dialogVisible.value = true
  form.value.name = name
  form.value.place = place
  form.value.id = id
}

// 提交表单
const emit = defineEmits(['update-list'])
const onSubmit = async () => {
  if (form.value.name && form.value.place) {
    // 提交接口
    await axios.patch(`/edit/${form.value.id}`, form.value)
    // 关闭弹框
    dialogVisible.value = false
    // 通知父组件拉取最新列表
    emit('update-list')
  }
}

defineExpose({
  open
})

</script>

<template>
  <el-dialog v-model="dialogVisible" title="编辑" width="400px">
    <el-form label-width="50px">
      <el-form-item label="姓名">
        <el-input placeholder="请输入姓名" v-model="form.name" />
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input placeholder="请输入籍贯" v-model="form.place" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.el-input {
  width: 290px;
}
</style>
