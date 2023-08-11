<template>
  <table>
    <thead>
      <tr>
        <th>命令</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.label }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: 'brew search 关键词',
          value: '查找包含关键词的软件',
        },
        {
          label: 'brew install 软件名',
          value: '安装软件',
        },
        {
          label: 'brew list',
          value: '查看所有已经安装的软件',
        },
        {
          label: 'brew info 软件名',
          value: '查看安装软件的详细信息',
        },
        {
          label: 'brew outdated',
          value: '查看可更新的软件',
        },
        {
          label: 'brew upgrade 软件名',
          value: '更新指定软件',
        },
        {
          label: 'brew upgrade',
          value: '更新所有软件',
        },
        {
          label: 'brew uninstall 软件名',
          value: '卸载软件',
        },
        {
          label: 'brew update',
          value: '更新 brew',
        },
        {
          label: 'brew cleanup',
          value: '清除本地缓存',
        },
      ],
    }
  },
}
</script>
