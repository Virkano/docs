<template>
  <table>
    <thead>
      <tr>
        <th>变量名</th>
        <th>描述</th>
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
          label: '$args',
          value: '请求行中的参数，同$query_string',
        },
        {
          label: '$content_length',
          value: '请求头中的Content-length字段',
        },
        {
          label: '$content_type',
          value: '请求头中的Content-Type字段',
        },
        {
          label: '$document_root',
          value: '当前请求在root指令中指定的值',
        },
        {
          label: '$host',
          value: '请求行的主机名，或请求头字段 Host 中的主机名',
        },
        {
          label: '$http_user_agent',
          value: '客户端agent信息',
        },
        {
          label: '$http_cookie',
          value: '客户端cookie信息',
        },
        {
          label: '$limit_rate',
          value: '可以限制连接速率的变量',
        },
        {
          label: '$request_method',
          value: '客户端请求的动作，如GET或POST',
        },
        {
          label: '$remote_addr',
          value: '客户端的IP地址',
        },
        {
          label: '$remote_port',
          value: '客户端的端口',
        },
        {
          label: '$remote_user',
          value: '已经经过Auth Basic Module验证的用户名',
        },
        {
          label: '$request_filename',
          value: '当前请求的文件路径',
        },
        {
          label: '$scheme',
          value: 'HTTP方法（如http，https）',
        },
        {
          label: '$server_protocol',
          value: '请求使用的协议，如HTTP/1.0或HTTP/1.1',
        },
        {
          label: '$server_addr',
          value: '服务器地址',
        },
        {
          label: '$server_name',
          value: '服务器名称',
        },
        {
          label: '$server_port',
          value: '请求到达服务器的端口号',
        },
        {
          label: '$request_uri',
          value: '包含请求参数的原始URI',
        },
        {
          label: '$uri',
          value: '不带请求参数的当前URI',
        },
        {
          label: '$document_uri',
          value: '与$uri相同',
        },
      ],
    }
  },
}
</script>
