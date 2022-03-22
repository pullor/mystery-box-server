## API 调用规则

本文档中所有请求服务端 API 接口的请求均使用此规则校验，以下不再重复说明。

API 接口统一请求URL ```http://127.0.0.1:7001/```

每次请求 API 接口时，均需要提供 HTTP Request Header，具体如下：

名称 | 类型 | 说明
--- | --- | ---
```Authorization```| String | 'Authorization':`Bearer ${token}`-数据签名 - 需要进行登录获取签名（登录注册不需要携带）
